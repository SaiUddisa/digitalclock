import { buildErrorMessage } from "vite";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clockFont: ["clockFont"],
      },
      colors: {
        clkClr: "rgb(219, 23, 23)",
        bgcolor: "rgb(9, 9, 13) ",
        dateColor: " rgb(4, 195, 195)",
      },
    },
  },

  plugins: [],
};
