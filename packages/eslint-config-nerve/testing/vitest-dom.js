module.exports = {
  overrides: [
    {
      files: ['**/__tests__/**/*.@(js|ts)', '**/?(*.)+(spec).@(js|ts)'],
      extends: ['plugin:testing-library/dom"'],
      plugins: ['vitest'],
    },
  ],
};
