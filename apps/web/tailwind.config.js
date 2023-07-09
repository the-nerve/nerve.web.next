const { getResolvedPackagePath } = require('@nerve/kit/node');
const tideTailwindConfig = require('@nerve/ui/tailwind');

/**
 * This file is used to configure Tailwind CSS.
 *
 * We do our best to closely follow the recommendations provided in the official Tailwind CSS documentation.
 * @see https://tailwindcss.com/docs/content-configuration
 *
 * A note on ignoring story files:
 * Ignoring storybook files here won't disable Tailwind in our storybook package, it simply prevents story-specific
 * styles from being included in the bundle when we build our app.
 */

const designSystemContentPaths = [
  getResolvedPackagePath('@nerve/ui', '/src/**/*.{ts,tsx}'),
  `!${getResolvedPackagePath('@nerve/ui', '/src/**/*.stories.{ts,tsx}')}`,
];

const appContentPaths = [
  './src/app/**/*.tsx',
  './src/{core,features,layouts}/**/*.{tsx,ts}',
  './src/shared/components/**/*.{tsx,ts}',
  '!./src/{core,features}/**/*.stories.{ts,tsx}',
];

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tideTailwindConfig],
  content: [...designSystemContentPaths, ...appContentPaths],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-family-inter)'],
      },
    },
  },
  plugins: [],
};
