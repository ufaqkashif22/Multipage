/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-indigo': 'rgb(98 84 243)',
      },
      boxShadow: {
        'custom': '0 0.2rem 1rem 0 rgba(16, 16, 17, 0.12)', 
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/line-clamp'),
  ],
 
}

