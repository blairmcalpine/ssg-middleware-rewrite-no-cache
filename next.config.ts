import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheHandler: require.resolve("./src/handler.js"),
  cacheMaxMemorySize: 0,
};

export default nextConfig;
