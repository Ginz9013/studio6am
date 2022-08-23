/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        sideBar: '18vw',
      },
      margin: {
        'content': '18vw',
      },
      colors: {
        primary: '#000000',
        secondary: {
          DEFAULT: '#444444',
          light: '#2c2c2c',
        },
      },
    },
  },
  plugins: [],
};
