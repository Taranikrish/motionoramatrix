/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "jet-black": "#1A1A1A",
        "ivory-white": "#F8F8F8",
        "chrome-accent": "#BFC5C5",
        "slate-gray": "#4A4A4A",
        "pearl": "#F2F2F2",
        "primary": "#BFC5C5", // Using chrome-accent as primary
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      boxShadow: {
        'glow': '0 0 15px theme(colors.chrome-accent), 0 0 5px theme(colors.chrome-accent)',
      }
    },
  },
  plugins: [],
}
