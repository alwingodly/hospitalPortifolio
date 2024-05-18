/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#776B5D',
        // secondary: '#B0A695',
        // tertiary: '#EBE3D5', 
        // light: '#F3EEEA',
        // primary: '#27374D',
        // secondary: '#526D82',
        // tertiary: '#9DB2BF',
        // light: '#DDE6ED',
        primary: '#E11D48',
        secondary: '#71717A',
        tertiary: '#DBE2EF',
        light: '#EDEDED',
        dim:'#DDDDDD',
        // primaryWhite: 'rgba(255,255,255,255)',
        softWhite: '#f4f4f5',
        border:'rgb(228, 228, 231)',
        // textColor: 'rgba(9,9,11,255)',
        textColor :'#09090B',
        primaryWhite:'#FFFFFF',
        secondaryWhite:'#F4F4F5'

      }
    },
  },
  plugins: [],
}
