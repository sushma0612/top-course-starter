/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#22223b",
        bgDark2: "#4a4e69",
        bgbeige:"#F5F5DC",
      },
      backgroundImage: {
        'hero-pattern': "url('/Users/sushma/Downloads/top-course-starter/src/pictures/download.png'')",
        
      }
    },
  },
  plugins: [],
};
