module.exports = {
  root: true,
  extends: [require.resolve('./react'), 'plugin:@next/next/core-web-vitals'],
  parserOptions: {
    requireConfigFile: false,
    allowImportExportEverywhere: true,
  },
  settings: {
    next: {
      /**
       * We need to resolve potential NextJS rootDirs from the root of the monorepo (for vscode) and the root
       * and from the root of the NextJS app eslint might be running in (for the CLI).
       */
      rootDir: ['apps/*/', './'],
    },
  },
};
