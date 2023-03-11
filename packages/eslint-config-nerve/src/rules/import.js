/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': ['warn', { maxDepth: 3 }],
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    // Allows us to use package exports without ESLint complaining (typescript will still catch bad imports)
    'import/no-unresolved': [2, { ignore: ['^@nerve/kit/*'] }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index', 'object'],
        pathGroupsExcludedImportTypes: [],
        pathGroups: [
          {
            pattern: '@nerve/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '$*/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '*.{json,graphql}',
            patternOptions: { matchBase: true, nocase: true },
            group: 'object',
            position: 'after',
          },
          {
            pattern: '*.{css,scss,eot,otf,ttf,woff,woff2,svg,jpg,jpeg,png,gif,html}',
            patternOptions: { matchBase: true, nocase: true },
            group: 'object',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      // Allow devDependencies in stories, tests, or webpack folders
      {
        devDependencies: [
          // Testing dirs
          '**/tests/*.@(ts|tsx)',
          '**/testing/*.@(ts|tsx)',
          '**/__mocks__/*.@(ts|tsx)',
          '**/__tests__/*.@(ts|tsx)',
          // Testing files
          '**/*.mock.@(ts|tsx)',
          '**/*.stub.@(ts|tsx)',
          '**/*.spec.@(ts|tsx)',
          // Test framework configs
          '**/tsup.config.ts',
          '**/vitest.config.@(js|ts)',
        ],
      },
    ],
  },
};
