// Handle (Yodo tag) reservation API. See the "Tags" folder in the Postman collection.
const AVAILABILITY_PATH = "/api/proxy/handles/availability";
const RESERVE_PATH = "/api/proxy/handles/reserve";

export const TAG_MIN_LENGTH = 3;
export const TAG_MAX_LENGTH = 20;

export type TagAvailability = {
  available: boolean;
  /** Why the tag can't be used, e.g. "This tag is taken." */
  reason: string | null;
  suggestions: string[];
};

/** Lowercase, no spaces, only letters, numbers, dots and underscores. */
export function normalizeTag(value: string): string {
  return value
    .toLowerCase()
    .replace(/^@+/, "")
    .replace(/[^a-z0-9._]/g, "")
    .slice(0, TAG_MAX_LENGTH);
}

export async function checkTagAvailability(
  tag: string,
  signal?: AbortSignal
): Promise<TagAvailability> {
  const res = await fetch(
    `${AVAILABILITY_PATH}?handle=${encodeURIComponent(tag)}`,
    { signal }
  );
  const body = await res.json().catch(() => null);
  // A taken tag still comes back as HTTP 200 (with status "fail")
  if (!res.ok || typeof body?.data?.available !== "boolean") {
    throw new Error(body?.message || "Couldn't check that tag");
  }
  const suggestions: unknown[] = Array.isArray(body.data.suggestions)
    ? body.data.suggestions
    : [];
  return {
    available: body.data.available,
    reason: body.data.reason ?? null,
    // The API returns suggestions as "@thednd"; store them without the @
    suggestions: suggestions.map((s) => normalizeTag(String(s))).filter(Boolean),
  };
}

export async function reserveTag(payload: {
  tag: string;
  email: string;
  phone: string;
}): Promise<void> {
  const res = await fetch(RESERVE_PATH, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      handle: payload.tag,
      email: payload.email,
      phone: payload.phone,
    }),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(
      body?.message || "Couldn't reserve your tag. Please try again."
    );
  }
}
