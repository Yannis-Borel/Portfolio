/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'degrade-start': '#E0E0E0', // Gris clair
        'degrade-end': '#7A7A7A', // Gris foncé
      },
      backgroundImage: {
        'header-degrade': 'linear-gradient(to bottom, #E0E0E0, #7A7A7A)',
      },
    }
  },
  plugins: []
}
