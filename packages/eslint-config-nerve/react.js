require('./src/common/modernModuleResolution');

/**
 * The Nerve's Base ESLint React config
 * Use for: React code in the browser
 */
module.exports = {
  root: true,
  extends: [
    require.resolve('./src/common/parserOptions'),
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    require.resolve('./src/rules/base'),
    require.resolve('./src/rules/import'),
    require.resolve('./src/rules/react'),
    require.resolve('./src/rules/react-a11y'),
    'turbo',
    'plugin:prettier/recommended',
  ],
  plugins: ['html', 'react', 'jsx-a11y', 'import'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  /**
   * Configures ESLint for Typescript-based React projects
   */
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: true,
      },
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
            project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json', 'tsconfig.json'],
          },
        },
      },
    },
  ],
};
