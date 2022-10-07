/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#072227",
        secondary: "#35858B",
        accent: "#4FBDBA",
        neutral: "#AEFEFF",
    },
    }},
  plugins: [],
};
