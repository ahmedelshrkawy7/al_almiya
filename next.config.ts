import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["phpv8.aait-d.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
