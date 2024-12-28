/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Lily:['Lily Script One','sans-serif']
      }
    },
  },
  // eslint-disable-next-line
  plugins: [require('daisyui'),],
}

