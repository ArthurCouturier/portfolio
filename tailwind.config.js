/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'josefin': ['Josefin', 'sans']
      },
      fontUrl: {
        'raleway': 'https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap',
        'josefin': 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Raleway:wght@500&display=swap'
      },
      textColor: {
        'text-red-hover': '#FF4136'
      }
    },
  },
  plugins: [],
}
