const API_ORIGIN = "https://api.useyodopay.com";

export function safeWebsiteUrl(value: unknown): string | null {
  if (typeof value !== "string" || /[\\\u0000-\u0020\u007f]/.test(value)) return null;
  try {
    const url = new URL(value);
    if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) return null;
    return url.href;
  } catch {
    return null;
  }
}

export function businessLogoUrl(value: unknown): string {
  const fallback = "/fallback-business.png";
  if (typeof value !== "string" || /[\\\u0000-\u0020\u007f]/.test(value)) return fallback;
  try {
    const url = new URL(value, API_ORIGIN);
    if (!["http:", "https:"].includes(url.protocol) || url.hostname !== "api.useyodopay.com" || url.port || url.username || url.password || !url.pathname.startsWith("/uploads/")) return fallback;
    url.protocol = "https:";
    return url.href;
  } catch {
    return fallback;
  }
}
