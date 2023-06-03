/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  poweredByHeader: false,
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
  transpilePackages: ['@nerve/kit', '@nerve/platform', '@nerve/ui'],
  webpack(config) {
    // See setup docs for SVGR with NextJS: https://react-svgr.com/docs/next/
    // Grab the existing rule that handles SVG imports (Node16 doesn't support optional nullish chaining)
    const fileLoaderRule = config.module.rules.find((rule) => {
      return rule.test && rule?.test?.test?.('.svg');
    });

    config.module.rules.push(
      // Re-apply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      }
    );

    config.module.rules.push({
      // Convert all other *.svg imports to React components

      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: /url/ }, // exclude if *.svg?url
      use: ['@svgr/webpack'],
    });

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextConfig;
