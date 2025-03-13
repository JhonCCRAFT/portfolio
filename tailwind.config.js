/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'principal':["Montserrat", "sans-serif"],
        'title':["Kanit", "sans-serif"]},
      
        backgroundImage:{
        "abrir-menu": "url('/img/icon-list.svg')",
        "cerrar-menu": "url('/img/icon-close.svg')",
      },
      colors:{
        'color-icon': '#d6e4f5',
      },
    },
  },
}

