/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs",],
  theme: {
    extend: {},
    screens: {
      'lg': {'min': '768px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["retro"],
  },
}
