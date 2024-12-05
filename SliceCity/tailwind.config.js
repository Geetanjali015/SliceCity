/* eslint-disable no-undef */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "1rem",
      },
    },
  },
  plugins: [],
};
