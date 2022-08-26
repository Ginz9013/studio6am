/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        sideBar: '18vw',
        contentBar: '82vw',
      },
      height: {
        contactArea: '85vh',
      },
      margin: {
        'content': '18vw',
      },
      colors: {
        primary: '#000000',
        secondary: {
          DEFAULT: '#171717',
          light: '#2c2c2c',
        },
      },
      rotate: {
        'm45': '-45deg',
      },
      screens: {
        'msm': {'max': '445px'}
      }
    },
  },
  plugins: [],
};
