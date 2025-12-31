import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // For Production/Deployment
      {
        protocol: "https",
        hostname: "mirya.vordx.com",
        pathname: "/public/storage/**",
      },
      // For Local Development (Fixes the localhost error)
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;