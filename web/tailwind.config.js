module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['CerebriSans', 'sans-serif'],
      },
      minWidth: {
        32: "8rem",
      },
      colors: {
        primary: {
          DEFAULT: '#DA0037',
          50: "#FFE0E8",
          100: "#FFC7D5",
          200: "#FF8AA7",
          300: "#FF527D",
          400: "#FF144F",
          500: "#DA0037",
          600: "#AD002B",
          700: "#850021",
          800: "#570016",
          900: "#2E000B"
        },
      },
      spacing: {
        34: '8.5rem',
        54: '13.5rem',
      },
    },
  },
  plugins: [],
};
