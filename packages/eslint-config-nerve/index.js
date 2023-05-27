require('./src/common/modernModuleResolution');

/**
 * The Nerve's Base ESLint config
 * Use for: Vanilla JS/TS code (non-react)
 */
module.exports = {
  root: true,
  extends: [
    require.resolve('./src/common/parserOptions'),
    'airbnb-base',
    require.resolve('./src/rules/base'),
    require.resolve('./src/rules/import'),
    'turbo',
    'plugin:prettier/recommended',
  ],
  plugins: ['import'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  overrides: [
    /**
     * Configures ESLint for Typescript projects
     */
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        require.resolve('./src/rules/typescript'),
      ],
      plugins: ['@typescript-eslint'],
      settings: {
        'import/resolver': {
          typescript: {
            // ! Required for eslint to resolve typescript alias paths
            project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json', 'services/*/tsconfig.json', 'tsconfig.json'],
          },
        },
      },
    },
  ],
};
