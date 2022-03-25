const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-pure-white': 'hsl(0, 0%, 100%)',
        'app-red': 'hsl(0, 97%, 63%)',
        'app-dark-blue': 'hsl(223, 30%, 9%)',
        'app-semi-dark-blue': 'hsl(223, 36%, 14%)',
        'app-greyish-blue': 'hsl(223, 23%, 46%)',
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
    },
  },
  plugins: [],
}
