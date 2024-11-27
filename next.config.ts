import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cf.bstatic.com", "images.pexels.com"],
    unoptimized: true
  }
};

export default nextConfig;
