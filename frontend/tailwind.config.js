/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["Unbounded", 'sans-serif'],
        prompt: ["Prompt", 'sans-serif'],
        poppins: ["Poppins", 'sans-serif'],
        dmsans: ["DM sans", 'sans-serif']
      },
      colors: {
        primary: "#F45B69",
        secondary: "#0d0c22",
      },
      boxShadow: {
        lightpink: "0 0 0 4px rgba(229,75,75,0.1)"
      }
    },
  },
  plugins: [],
}