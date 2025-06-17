import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // ✅ active le support styled-components avec SWC
  },
};

export default nextConfig;