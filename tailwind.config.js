const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-pure-white': 'hsl(0, 0%, 100%)', // #FFFFFF
        'app-red': 'hsl(0, 97%, 63%)', // #FC4747
        'app-dark-blue': 'hsl(223, 30%, 9%)', // #10141E
        'app-semi-dark-blue': 'hsl(223, 36%, 14%)', // #161D2F
        'app-greyish-blue': 'hsl(223, 23%, 46%)', // #5A698F
        'app-grey': 'hsl(225, 3%, 77%)', // #C3C4C7
        'app-placeholder': 'hsl(223, 3%, 54%)', // #87898E
      },
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'app-heading-lg': '2rem',
        'app-heading-md': '1.5rem',
        'app-heading-sm': '1.5rem',
        'app-heading-xs': '1.125rem',
        'app-body-md': '0.9375rem',
        'app-body-sm': '0.8125rem',
      },
      screens: {
        '3xs': '320px',
        '2xs': '375px',
        xs: '420px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}
