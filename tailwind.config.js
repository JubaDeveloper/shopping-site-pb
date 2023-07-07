/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        rbs: "Roboto Serif"
      },
      animation: {
        spin_medium: "spin 0.5s linear infinite"
      }
    },
  },
  plugins: [],
}

