/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

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
        kwonBlown: "#815853",
        kwonBlownText: "#F9EADD",
      },
      fontFamily: {
        sans: ["SeoulHangang", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        activateApp: {
          "0%": {},
          "10%": {
            filter: "brightness(0) invert(1)",
          },
          "100%": {
            transform: "scale(100)",
            filter: "brightness(0) invert(1)",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      // addBase({
      //   ".markdown": {
      //     p: {
      //       padding: "0.25rem 0 0.25rem 0",
      //     },
      //     blockquote: {
      //       "&::before": {
      //         content: "",
      //         display: "block",
      //         width: "0.5rem",
      //         background: "black",
      //       },
      //     },
      //   },
      // })
    }),
  ],
}
