/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald':["Oswald", "sans-serif"],
        'bodoni-moda': ['"Bodoni Moda"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        "madini":["Madimi One", "sans-serif"]
      },
      colors:{
        "primary":"#0D8AC7",
        "lightText":"#2B2B2B",
        "inputBackground":"#F3F1F1"
      }

    },
  },
  plugins: [],
}

