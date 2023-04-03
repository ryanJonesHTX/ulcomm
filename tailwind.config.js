/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html, js}'],
  theme: {
    extend: {
      fontFamily: {
        cousine: ['Cousine', 'monospace'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-phone': "url('../images/hero-phone-background.png')",
      },
    },
  },
  plugins: [],
}
