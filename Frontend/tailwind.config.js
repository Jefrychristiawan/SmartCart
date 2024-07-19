/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 1px 10px -2px rgba(0,0,0,0.75)',
      },
    },
  },
  plugins: [],
}

