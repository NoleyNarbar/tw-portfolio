/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '200px', // min-width
    },
    extend: {
      fontFamily: {
        burtons: 'burtons',
      }
    },
  },
  plugins: [],
}