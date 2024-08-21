/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { 'min': '576px' },
        md: { 'min': '768px' },
        lg: { 'min': '992px' },
        xl: { 'min': '1200px' }
      },
    },
  },
  plugins: [],
}
