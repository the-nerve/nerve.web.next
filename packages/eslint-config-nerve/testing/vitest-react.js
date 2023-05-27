module.exports = {
  overrides: [
    {
      files: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec).ts?(x)'],
      extends: ['plugin:testing-library/react'],
      plugins: ['vitest'],
    },
  ],
};
