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
          },
          backgroundImage: {
            'alaskasm': "url('../../public/images/alaska640.webp')",
            'alaskamd': "url('../../public/images/alaska768.webp')",
            'alaskalg': "url('../../public/images/alaska1024.webp')",
            'alaskaxl': "url('../../public/images/alaska1280.webp')",
            'alaska2xl': "url('../../public/images/alaska1920.webp')",
          }
        }
      }
    }