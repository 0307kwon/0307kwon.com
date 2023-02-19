/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray600: "#666666",
        gray400: "#D9D9D9",
      },
      fontFamily: {
        sans: ["SeoulHangang", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
