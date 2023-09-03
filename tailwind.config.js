/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['Poppins'],
        display:['Open+Sans:wght@400'],
        display1:['Open+Sans:wght@700'],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/bg1.png')",
       
      },
    },
  },
  plugins: [],
}

