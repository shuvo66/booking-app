/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
    container: {
      padding: "15px",
    },
    colors: {
      primary: "#003b95",
      white: "#fff",
      black: "#000",
      tableHeadingBg: "#fafafa",
      tableHeadingColor: "#1e1e1e",
      card: "#fafafa",
      red: "#FF2400",
    },
  },
  plugins: [],
};
