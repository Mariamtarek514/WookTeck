/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#F88500",
        text: "#333333",
        dark: "#202328",
        deep: "#171A1A",
      },
    },
  },
  plugins: [],
};
