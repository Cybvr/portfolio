/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './app/styles/**/*.css',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        'plus-jakarta': ['var(--font-plus-jakarta)'],
        fira: ['var(--font-fira-sans)'],
        oswald: ['var(--font-oswald)'],
        quicksand: ['var(--font-quicksand)'],
        merriweather: ['var(--font-merriweather)'],
        raleway: ['var(--font-raleway)']
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}