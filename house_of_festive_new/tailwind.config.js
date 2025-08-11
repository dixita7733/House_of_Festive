/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3', 
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#85193C',
          600: '#7c2d60',
          700: '#701a75',
          800: '#581c87',
          900: '#4c1d95',
        }
      }
    },
  },
  plugins: [],
};
