/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      spacing: {
        '21': '5.1rem',
        '22': '5.2rem',
        '15': '3.75rem',
        '16': '4rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '12': '3rem',
        '11': '2.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '16.5': '4.125rem',
        '24': '6rem',
        '25': '6.25rem',
        '42': '10.5rem',
      }
    },
  },
  plugins: [],
}