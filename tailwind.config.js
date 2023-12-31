/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     backgroundImage: {
      "book": "url('../public/appoint.jpg')"
     },
     fontFamily: {
      "montserrat": ["Montserrat", "sans-serrif"]
     }
    },
  },
  plugins: [],
}