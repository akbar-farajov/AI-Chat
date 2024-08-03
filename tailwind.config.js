/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#212121",
          light: "#ffff",
        },
      },
    },
  },
  plugins: [],
};
