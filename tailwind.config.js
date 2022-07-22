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
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          '2xl': '1536px',
          'xl': '1280px',
        },
        fontFamily: {
          sans: ['TP Sans', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        extend: {
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