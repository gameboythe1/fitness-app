/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Remove unsupported `turbo` flag for Vercel builds
    typedRoutes: true,
  },
};

export default nextConfig;


