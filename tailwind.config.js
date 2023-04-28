/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      backrop: "#121212",
      primary: "#1db954",
      active: "#282828",
      link: "#b3b3b3",
      footer: "#181818",
      white: "#fff",
      black: "#000",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
