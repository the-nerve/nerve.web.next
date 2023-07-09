import path from 'path';

/**
 * Resolves the root directory of a given node_modules package.
 *
 * @param {string} packageName The node_modules package name (must be installed in package.json deps)
 * @returns {string} The root directory of the package
 */
export const getPackageRootDir = (packageName: string) => {
  if (!packageName) {
    throw new Error('"packageName" is required to resolve a package path.');
  }

  // ! We must set `process.cwd()` as the base lookup path, or else `require.resolve` will look in the `@littleotter/kit` package directory.
  const resolvedPackagePath = require.resolve(`${packageName}/package.json`, { paths: [process.cwd()] });

  return path.dirname(resolvedPackagePath);
};

/**
 * Resolve a path to a given file or directory within a specified node_modules package.
 *
 * @param {string} packageName The node_modules package name (must be installed in package.json deps)
 * @param {string} relativePath (optional) The relative path to the file or directory within the package
 * @returns {string} The resolved path to the file or directory in a given package
 */
export const getResolvedPackagePath = (packageName: string, relativePath = '') => {
  return path.join(getPackageRootDir(packageName), relativePath);
};
