/**
 * NextJS has done a lot of work to improve how ESLint functions in a monorepo scope. Instead of trying to re-engineer
 * their solution, we're going to straight-up copy their solution. The goal is to be able to use the same ESLint config
 * across the entire repo, without needing to have any peer dependencies installed.
 *
 * This entire file is a copy of the original work found here:
 * https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js
 *
 * We've made a few small syntax modifications and ESLint overrides to make it work with our codebase setup. But other
 * than tht, it's left untouched.
 */
const keptPaths = [];
const sortedPaths = [];
const cwd = process.cwd().replace(/\\/g, '/');
const originalPaths = require.resolve.paths('eslint-plugin-import');

// eslint throws a conflict error when plugins resolve to different
// locations, since we want to lock our dependencies by default
// but also need to allow using user dependencies this updates
// our resolve paths to first check the cwd and iterate to
// eslint-config-next's dependencies if needed

// eslint-disable-next-line no-plusplus
for (let i = originalPaths.length - 1; i >= 0; i--) {
  const currentPath = originalPaths[i];

  if (currentPath.replace(/\\/g, '/').startsWith(cwd)) {
    sortedPaths.push(currentPath);
  } else {
    keptPaths.unshift(currentPath);
  }
}

// maintain order of node_modules outside of cwd
sortedPaths.push(...keptPaths);

const hookPropertyMap = new Map(
  [
    ['eslint-plugin-import', 'eslint-plugin-import'],
    ['eslint-plugin-react', 'eslint-plugin-react'],
    ['eslint-plugin-jsx-a11y', 'eslint-plugin-jsx-a11y'],
  ].map(([request, replacement]) => [request, require.resolve(replacement, { paths: sortedPaths })])
);

const mod = require('module');

const resolveFilename = mod._resolveFilename;
mod._resolveFilename = (request, parent, isMain, options) => {
  const hookResolved = hookPropertyMap.get(request);
  if (hookResolved) {
    // eslint-disable-next-line no-param-reassign
    request = hookResolved;
  }
  return resolveFilename.call(mod, request, parent, isMain, options);
};

/**
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */

// eslint-disable-next-line import/no-extraneous-dependencies
require('@rushstack/eslint-patch/modern-module-resolution');
