# Security cleanup — 17 November 2026

Reviewed upstream commit `9bff5c0152f495c478b02cae24ef37682a963b99` of YODOPAY/website. The normal Documents clone is named `yodo-website`, on default branch `main`.

## Removed malware

Removed an obfuscated remote-code loader in the root initializer, its development/build/start hooks, and a second loader hidden after the PostCSS configuration. Both were statically decoded as text and matched the previously reviewed blockchain-discovered loader body. Neither was executed and no payload host was contacted. They discover remote hosts through Ethereum transactions, download encoded JavaScript, evaluate it with Node privileges and start detached processes. Historical security-cleanup commit messages did not establish a clean tree. Old revisions and other branches remain unreviewed; do not run historical versions.

Restored local environment ignores and removed ignore entries hiding known suspicious drops. Existing design-export and Postman-collection ignores are retained. No tracked environment file or Postman collection was present in the reviewed default branch.

## Application hardening

Business profile routes now validate tags and encode the username in the API path. Invalid percent encoding returns a controlled not-found state instead of throwing. Business website links accept only absolute HTTP/HTTPS URLs without credentials/control characters. Profile logos are limited to the API uploads path; old HTTP links to that same host are upgraded to HTTPS and invalid sources use the existing fallback. The optimizer no longer allows remote HTTP images.

Guardian context requests and OTP verification bypass client caching. OTP verification requires an explicit successful response body, so HTTP 200 failures no longer produce the success screen. Tag reservation likewise rejects explicit failure envelopes while preserving legitimate empty success responses and taken-tag availability envelopes.

Guardian and Snapchat callback pages use dynamic rendering and no-referrer/no-store/no-index protections. Local production responses were checked using synthetic URLs without running client JavaScript or calling the backend. These protections do not authenticate guardian access, validate OAuth state/PKCE, or hide URLs from the browser/history/server handling the initial request. Those require backend and operational review.

## Dependencies and workflow

Initial full npm audit: 9 vulnerable packages (2 critical, 6 high, 1 moderate). Final full audit: zero known vulnerabilities. Next.js is updated within version 15; a scoped patched PostCSS 8 override addresses its older transitive CSS dependency. Build compatibility was checked. Review this override during future framework upgrades. Audit results do not prove the absence of unknown or malicious dependencies.

The workflow runs a targeted malware guard immediately after checkout, before dependency installation. It includes JSX/TSX padding checks and environment-file checks. CI/server installs use the npm lockfile with lifecycle scripts disabled. Regression tests run explicitly. Deployment ZIP inputs now use the actual npm lockfile and TypeScript Next config instead of nonexistent Yarn/JavaScript filenames. Checkout credentials are not persisted and token contents access is read-only. Remote command failures stop before reload. Existing deployment destination and process name are retained; the workflow was not deployed.

## Validation and remaining review

The production build, TypeScript check, nine offline security tests and local privacy-header checks passed. All mocked API data was synthetic. No real guardian documents, identity verification, OAuth codes, payments or live API requests were used. A cold build fetches the existing Google Fonts, and network-enabled validation succeeded.

The guardian context is looked up by email and uploads identity documents before OTP verification. Confirm server-side authorization, account/document ownership, OTP attempt limits, retention and private file storage before relying on this flow. Client extension/size checks are only usability checks and are bypassable. Public image optimization must not expose private uploaded documents through shared caching. OAuth state binding, expiration/replay and PKCE are backend responsibilities. Review actual proxy/CDN cache behavior and ensure private routes are not cached in production.

If an infected revision was built or started, treat the environment as potentially compromised. Preserve evidence, investigate detached processes/persistence, rotate exposed credentials from a clean machine and rebuild affected hosts or runners. An overlay deployment does not remove old malware or persistence. Source cleanup cannot undo prior execution. The external report contains detailed indicators, hashes, validation logs and limitations.
