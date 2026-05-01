/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        tertiary: "var(--color-tertiary)",
        "tertiary-hover": "var(--color-tertiary-hover)",
        dot: "var(--color-dot)",
      },
      fontFamily: {
        primary: "var(--font-primary)",
      },
    },
  },
  plugins: [],
};