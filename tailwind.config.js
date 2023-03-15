/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Mono", "sans"],
      },
      colors: {
        'light': '#ffffff',
        'dark': {
          50: "#E8E8E8",
          100: "#D1D1D1",
          200: "#A6A6A6",
          300: "#787878",
          400: "#4A4A4A",
          500: "#1E1E1E",
          600: "#171717",
          700: "#121212",
          800: "#0D0D0D",
          900: "#050505"
        },
        'light-blue': '#569CD6',
        'blue': '#007acc',
      },
      screens: {
        'xxs': '400px',
        'xs': '490px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}