/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        'nav-icon': '70px',
      },
      colors: {
        gray1: '#1A1A1A'
      },
    },
  },
  plugins: [],
}

