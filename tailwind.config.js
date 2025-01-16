/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '960px',
      lg: '1200px',
      xl: '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '4rem',
        lg: '5rem',
        xl: '6rem',
      },
      screens: {
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ff97',
          100: '#00B370',
        },
        black: {
          DEFAULT: '#000',
          100: '#18181b',
          200: '#282A2F',
          300: '#414246',
          400: '#4C5352',
          500: '#202125',
        },
      },
    },
  },
  plugins: [],
};
