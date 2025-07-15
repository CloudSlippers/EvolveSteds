import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enables the new app router (should be default in recent Next.js versions)
  },
  // Optional: customize other stuff if needed
};

export default nextConfig;
