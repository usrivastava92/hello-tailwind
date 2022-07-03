const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: colors.blue,
      secondary: colors.slate,
      success: colors.green,
      danger: colors.red,
      warning: colors.yellow,
      info: colors.blue
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}