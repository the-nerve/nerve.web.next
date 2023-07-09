module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,

  /**
   * Tailwind CSS support
   * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss
   *
   * We are going to let this plugin use the default tailwind config, because ours may not be built yet, and we don't
   * want prettier to have a build-dependency to work correctly.
   */
  plugins: [require('prettier-plugin-tailwindcss')],
};
