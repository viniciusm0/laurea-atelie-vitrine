/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7f8',
          100: '#ebf0f1',
          200: '#dce2e5',
          300: '#c2ced3',
          400: '#94a7b0',
          500: '#758d99',
          600: '#607581',
          700: '#50606b',
          800: '#435059',
          900: '#3B4C5D', // Dark slate blue from logo
          950: '#263340',
        },
        accent: {
          light: '#e8ebea', // Default background from logo vibe
          DEFAULT: '#b3bebe', // Leaves vibe
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Very elegant and common
        serif: ['Garamond', 'Playfair Display', 'serif'], // For elegant titles
      }
    },
  },
  plugins: [],
}
