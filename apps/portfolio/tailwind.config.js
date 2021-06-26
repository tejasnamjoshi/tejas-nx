module.exports = {
  purge: [
    './apps/portfolio/pages/**/*.{js,ts,jsx,tsx}',
    './apps/portfolio/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
  // mode: 'jit',
};
