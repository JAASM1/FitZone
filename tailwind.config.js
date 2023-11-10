/** type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
    },
    colors: {
      "dark-purple": "#081A51",
      "light-white": "rgba(255, 255, 255, 0.18)"
    },
    backgroundImage:{
      'image': "url('../src/asset/img/login/pesas.jpg')",
      'image1': "url('../src/asset/img/login/boxGirl.jpg')"
    },
  },
},
plugins: [],
}

