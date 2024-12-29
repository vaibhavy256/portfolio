/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bg: 'backgroundColorChange 5s infinite',
      },
      keyframes: {
        backgroundColorChange: {
          '0%': { backgroundColor: '#1a202c' }, // Start color
          '50%': { backgroundColor: '#2d3748' }, // Mid-transition color
          '100%': { backgroundColor: '#1a202c' }, // End color
        },
      },
    },
  },
  plugins: [],
}

