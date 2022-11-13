/** @type {DefaultColors} */
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      }
    },
  },
  plugins: [],
}
