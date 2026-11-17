import assert from 'node:assert/strict';
import test from 'node:test';
import { safeWebsiteUrl, businessLogoUrl } from '../src/lib/securityUrls.ts';
import { profileUsername, checkTagAvailability, reserveTag } from '../src/lib/yodoTag.ts';
import { fetchGuardianContext, verifyGuardianOtp, validateUploadFile, MAX_UPLOAD_BYTES } from '../src/lib/guardianKyc.ts';

async function withFetch(mock, run) {
  const previous = globalThis.fetch;
  globalThis.fetch = mock;
  try { return await run(); } finally { globalThis.fetch = previous; }
}
const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

test('profile route accepts valid tags and rejects malformed or path-changing values', () => {
  for (const [input, expected] of [['@alice', 'alice'], ['%40alice', 'alice'], [['@alice'], 'alice'], ['@alice_123', 'alice_123']]) {
    assert.equal(profileUsername(input), expected);
  }
  for (const input of [undefined, '', '%', '%ZZ', 'alice', '@ab', '@' + 'a'.repeat(21), '@alice/../admin', '@alice?x=1', '@alice#x', '@alice%2Fadmin', '@alice\\admin']) {
    assert.equal(profileUsername(input), null);
  }
});

test('business websites permit web URLs and reject active schemes or embedded credentials', () => {
  assert.equal(safeWebsiteUrl('https://example.invalid/about'), 'https://example.invalid/about');
  assert.equal(safeWebsiteUrl('http://example.invalid/'), 'http://example.invalid/');
  for (const value of [undefined, null, 42, 'javascript:alert(1)', 'data:text/html,test', '//example.invalid', 'https://user:password@example.invalid', 'https://example.invalid\\@attacker.invalid', 'java\nscript:alert(1)']) {
    assert.equal(safeWebsiteUrl(value), null);
  }
});

test('business logos stay on the configured API uploads path and use HTTPS', () => {
  for (const value of ['http://api.useyodopay.com/uploads/logo.png', 'https://api.useyodopay.com/uploads/logo.png', '/uploads/logo.png']) {
    assert.equal(businessLogoUrl(value), 'https://api.useyodopay.com/uploads/logo.png');
  }
  for (const value of [null, 'https://attacker.invalid/uploads/logo.png', 'https://api.useyodopay.com.attacker.invalid/uploads/logo.png', 'https://user@api.useyodopay.com/uploads/logo.png', 'https://api.useyodopay.com:8443/uploads/logo.png', '/uploads/../private', 'javascript:alert(1)', '/\\attacker.invalid/image']) {
    assert.equal(businessLogoUrl(value), '/fallback-business.png');
  }
});

test('guardian context is requested without caching and encodes the email parameter', async () => {
  const email = 'fixture+one@example.invalid&role=admin';
  await withFetch(async (url, options) => {
    assert.equal(url, `/api/proxy/kyc/guardian/context?email=${encodeURIComponent(email)}`);
    assert.equal(options.cache, 'no-store');
    return json({ status: 'success', data: { guardian: { email } } });
  }, async () => assert.equal((await fetchGuardianContext(email)).guardian.email, email));
});

test('guardian verification rejects semantic failures even when HTTP status is 200', async () => {
  for (const status of ['fail', 'failed', 'error', undefined]) {
    await withFetch(async () => json({ status, message: 'Verification rejected' }), async () => {
      await assert.rejects(verifyGuardianOtp({ email: 'fixture@example.invalid', otp: '123456', guardianIdDocument: '/uploads/fixture.pdf' }), /Verification rejected/);
    });
  }
});

test('guardian verification accepts an explicit success and preserves its payload', async () => {
  const payload = { email: 'fixture@example.invalid', otp: '123456', guardianIdDocument: '/uploads/fixture.pdf' };
  await withFetch(async (_url, options) => {
    assert.equal(options.method, 'POST');
    assert.equal(options.cache, 'no-store');
    assert.deepEqual(JSON.parse(options.body), payload);
    return json({ status: 'success', message: 'Verified', data: {} });
  }, async () => assert.equal((await verifyGuardianOtp(payload)).status, 'success'));
});

test('guardian file checks reject oversized and disallowed filenames', () => {
  assert.equal(validateUploadFile({ name: 'fixture.PDF', size: MAX_UPLOAD_BYTES }), null);
  assert.match(validateUploadFile({ name: 'fixture.pdf', size: MAX_UPLOAD_BYTES + 1 }), /File too large/);
  assert.match(validateUploadFile({ name: 'fixture.pdf.exe', size: 1 }), /Allowed types/);
});

test('tag reservation rejects explicit failure bodies and HTTP failures', async () => {
  const payload = { tag: 'fixture', email: 'fixture@example.invalid', phone: '0000000000' };
  for (const [status, body] of [[200, { status: 'fail', message: 'Taken' }], [200, { status: 'error', message: 'Taken' }], [409, { message: 'Taken' }]]) {
    await withFetch(async () => json(body, status), async () => assert.rejects(reserveTag(payload), /Taken/));
  }
  await withFetch(async () => new Response(null, { status: 204 }), async () => assert.equal(await reserveTag(payload), undefined));
});

test('taken-tag availability remains compatible with the API fail envelope', async () => {
  await withFetch(async () => json({ status: 'fail', data: { available: false, reason: 'Taken', suggestions: ['@fixture_2'] } }), async () => {
    const result = await checkTagAvailability('fixture');
    assert.equal(result.available, false);
    assert.deepEqual(result.suggestions, ['fixture_2']);
  });
});
