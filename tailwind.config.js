const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily: {
          'sans': ['roboto'],
          'cursive': ['ff-market-web']
      },
      colors: {
          gray: colors.gray,
          red: colors.red,
          green: colors.green,
          blue: {
              light: "#385E7F",
              dark: "#1C2D3C"
          },
          purple: {
              light: "#856CA8",
              dark: "#57328A"
          },
          minty: "#cae5ce",
          white: "#ffffff"
      },
      extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/custom-forms')
  ],
}
