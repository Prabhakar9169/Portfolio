import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false, // disable build progress indicator
    buildActivityPosition: "bottom-right", // agar move karna ho
  },
};

export default nextConfig;
