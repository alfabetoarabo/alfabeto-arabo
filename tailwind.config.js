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
          DEFAULT: '#0f766e', // Teal/Smeraldo profondo (più arabeggiante del blu)
          dark: '#0d9488',
          light: '#ccfbf1',
        },
        secondary: {
          DEFAULT: '#d97706', // Ambra/Oro scuro
          light: '#fcd34d',
        },
        sand: {
          50: '#fdfbf7', // Sfondo carta antica molto chiaro
          100: '#f7f3e8',
          200: '#efe5d0',
        },
        accent: '#ffffff',
      },
      fontFamily: {
        arabic: ['"Amiri"', '"Noto Naskh Arabic"', 'serif'],
        heading: ['"Amiri"', 'serif'],
        sans: ['"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'pattern-geometric': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f766e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
