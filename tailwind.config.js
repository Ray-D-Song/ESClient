/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'leaf': 'url(/leaf.jpg)'
      },
      colors: {
        'primary': '#232524',
        'sescondary': '#40484E',
        'white-green': '#DCE4EB',
        'leaf-green': '#314D45',
        'loading': '#AFCEC3',
        'hover-card': '#6C757D',
        'text-dark': '#29423B'
      }
    },
  },
  plugins: [],
}

