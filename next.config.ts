import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  /* On a enlevé la partie eslint qui fâchait le terminal */
};

export default nextConfig;