/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a', // Blu intenso
          dark: '#1e40af',
        },
        secondary: {
          DEFAULT: '#fbbf24', // Oro
          dark: '#f59e0b',
        },
        accent: '#ffffff', // Bianco
      },
      fontFamily: {
        arabic: ['"Amiri"', '"Noto Naskh Arabic"', 'serif'],
        heading: ['"Amiri"', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
