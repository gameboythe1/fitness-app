import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: true,
    typedRoutes: true,
  },
};

export default nextConfig;



