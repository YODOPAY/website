import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    // Keep resized images cached for a month instead of the 60s default
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.useyodopay.com",
        pathname: "/uploads/**",
      },
    ],
  },
  async headers() {
    const headers = [
      { key: "Referrer-Policy", value: "no-referrer" },
      { key: "X-Robots-Tag", value: "noindex, nofollow" },
      { key: "Cache-Control", value: "private, no-store, max-age=0" },
    ];
    return ["/guardian/:path*", "/connect/snap", "/api/proxy/kyc/guardian/:path*"].map((source) => ({ source, headers }));
  },
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "https://api.useyodopay.com/v1/:path*",
      },
    ];
  },
};

export default nextConfig;

