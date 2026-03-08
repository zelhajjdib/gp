import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS === "true" ? "/gp" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
