/* @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        accent: "#ff0000",
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "'Helvetica Neue'", "sans-serif"],
        display: ["'Poppins'", "'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
