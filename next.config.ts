import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper static generation for Vercel
  trailingSlash: false,
  // Enable experimental features for App Router
  experimental: {
    optimizePackageImports: ["@/components"],
  },
  // Optimize images for Vercel deployment
  images: {
    formats: ["image/webp", "image/avif"],
  },
  // Ensure proper build output
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
