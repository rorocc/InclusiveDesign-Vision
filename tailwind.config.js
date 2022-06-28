/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./renderer/**/*.{vue,js,ts,jsx,tsx}",
    "./server/index.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['DM Sans', 'ui-sans-serif', 'system-ui']
      },
      fontSize: {
        base: '1.1rem'
      }
    },
  },
  plugins: [],
}
