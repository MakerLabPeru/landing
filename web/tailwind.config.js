module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['CerebriSans', 'sans-serif'],
      },
      colors: {
        primary: '#84142D',
      },
      spacing: {
        34: '8.5rem',
        54: '13.5rem',
      }
    },
  },
  plugins: [],
};
