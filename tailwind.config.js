/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'industrial-blue': '#1e3a5f',
        'industrial-dark': '#0f1f2e',
        'industrial-gray': '#2d3748',
      },
    },
  },
  plugins: [],
}

