/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector', // enables toggling dark mode via a CSS class
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
