/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   
      "./src/**/*.{js,jsx,ts,tsx}",

],
  theme: {
    extend:{
      fontFamily:{
       'mw': ['Merriweather', 'sans-serif']
      },
      clamp: {
        '1/2': 'clamp(50%, 100%, 100vw)',
        '2/3': 'clamp(66.67%, 100%, 100vw)'}
    }},
  plugins: [],
}

