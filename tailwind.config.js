/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bowlby: ['Bowlby One', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        customGrey: "#1E1E1E",
        customBeige: '#E9E3DC',
        customLilac: '#B3A0CD',
        customYellowGreen: '#D1EF53'
      }
    },
  },
  plugins: [],
}
