import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mirya.vordx.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
