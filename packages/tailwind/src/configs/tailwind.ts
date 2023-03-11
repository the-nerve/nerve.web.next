/** @type {import('tailwindcss').Config} */
export const tailwindConfig = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}],
};
