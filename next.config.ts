import type { NextConfig } from "next";
import path from "path";

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
      {
        protocol: "http",
        hostname: "api.useyodopay.com",
        pathname: "/uploads/**",
      },
    ],
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

