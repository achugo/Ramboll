/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        board: "#F5F5F5",
        button: "#BCAEAE",
        input: "#D9D9D9",
        "filter-text": "#7C4C4C",
      },
    },
    fontSize: {
      sm: "8px",
      base: "11px",
      xl: "16px",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
  },
  plugins: [],
};
