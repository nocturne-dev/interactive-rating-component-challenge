/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      orange: "hsl(25, 97%, 53%)",
      white: "hsl(0, 0%, 100%)",
      "gray-light": "hsl(217, 12%, 63%)",
      "gray-medium": "hsl(216, 12%, 54%)",
      "blue-dark": "hsl(213, 19%, 18%)",
      "blue-very-dark": "hsl(216, 12%, 8%)",
      "blue-very-dark-grayish": "hsl(205,18.2%,12.9%)",
      "blue-footer": "hsl(228, 45%, 44%)",
    },

    fontFamily: {
      overpass: ["Overpass", ...defaultTheme.fontFamily.sans],
    },

    screens: {
      "mobile-sm": "320px",
      "mobile-md": "375px",
      "mobile-lg": "425px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },

    extend: {},
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
