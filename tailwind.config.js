const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"],
      theme: {
        container: {
          center: true,
          margin: '2rem',
        },
       
        extend: {
          fontFamily: {
            sans: ['PT Sans', ...defaultTheme.fontFamily.sans],
          },
          spacing: {
            '128': '32rem',
            '144': '36rem',
          },
          borderRadius: {
            '4xl': '2rem',
          }
          
          
        }
      }
    }