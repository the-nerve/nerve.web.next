/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    /**
     * ! Dangerously allow production builds to successfully complete even if our project has errors.
     * ! We are allowing this because we are running type checks in a separate step in our CI pipeline.
     */
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
