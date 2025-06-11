/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: ['dark'],  // <-- هنا
  theme: {
    extend: {},
  },
  plugins: [],
}
