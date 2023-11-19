/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "10px 10px 56px -8px rgba(27, 152, 224)",
      },
      colors: {
        mustard: {
          DEFAULT: "#fed766",
          100: "#473500",
          200: "#8e6b01",
          300: "#d5a001",
          400: "#fec620",
          500: "#fed766",
          600: "#fee085",
          700: "#ffe8a4",
          800: "#fff0c2",
          900: "#fff7e1",
        },
        dark_purple: {
          DEFAULT: "#22031f",
          100: "#070106",
          200: "#0d010c",
          300: "#140212",
          400: "#1a0218",
          500: "#22031f",
          600: "#780a6d",
          700: "#cf12bc",
          800: "#f050e0",
          900: "#f7a8ef",
        },
        moonstone: {
          DEFAULT: "#009fb7",
          100: "#002025",
          200: "#004049",
          300: "#005f6e",
          400: "#007f93",
          500: "#009fb7",
          600: "#00d8f9",
          700: "#3be5ff",
          800: "#7ceeff",
          900: "#bef6ff",
        },
        dim_gray: {
          DEFAULT: "#696773",
          100: "#151517",
          200: "#2a292e",
          300: "#3f3e46",
          400: "#54525d",
          500: "#696773",
          600: "#868492",
          700: "#a4a3ad",
          800: "#c3c1c8",
          900: "#e1e0e4",
        },
      },
    },
  },
  plugins: [],
};
