/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            fontFamily: {
                sora: ['var(--font-sora)'], // Add Sora here
                fira: ['var(--font-fira-sans)'],
                oswald: ['var(--font-oswald)'],
                quicksand: ['var(--font-quicksand)'],
                merriweather: ['var(--font-merriweather)'],
                raleway: ['var(--font-raleway)']
            },
            colors: {}
        }
    },
    plugins: [require("tailwindcss-animate")],
}
