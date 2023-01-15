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
      },
      keyframes: {
        animateBG: {
          '0%': {
            backgroundPosition: '0 0',
            backgroundOpacity: '50'
          },
          '100%': {
            backgroundPosition: '-400% 2000%',
            backgroundOpacity: '50'
          },
        },
      },
      backgroundImage: {
        waves: "url('./assets/backgrounds/wavey-fingerprint.svg')",
        arrows: "url('./assets/backgrounds/alternating-arrowhead.svg')",
        corners: "url('./assets/backgrounds/cornered-stairs.svg')",
      },
      animation: {
        animateBG: 'animateBG 100s linear infinite',
      }
    },
  },
  plugins: [
      require('tailwind-scrollbar-hide')
  ],
}
