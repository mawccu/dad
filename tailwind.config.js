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
      fontWeight: {
        '100': '100',  // Thin
        '150': '150',  // Custom between Thin and Regular
        '200': '200',  // Custom between Thin and Regular
        '300': '300',  // Light
        '350': '350',  // Custom between Light and Regular
        '400': '400',  // Regular
        '450': '450',  // Custom between Regular and Medium
        '500': '500',  // Medium
        '600': '600',  // SemiBold
        '700': '700',  // Bold
        '800': '800',  // ExtraBold
      },
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
        '60': '15rem',
        '70': '17.5rem',
        '80': '20rem',
      },
        fontSize: {
        '0.15xl': '0.125rem', // 2px
        '0.25xl': '0.25rem', // 4px
        '0.5xl': '0.5rem',   // 8px
        '0.75xl': '0.75rem', // 12px
        '1.5xl': '1.375rem',   // Adds text-1.5xl
        '2.5xl': '1.75rem',    // Example for another custom size
        '3xl': '2rem',
        '4xl': '2.25rem',
        '4.5xl': '2.625rem',    // Just an example of a larger custom size
      },
    },
  },
  plugins: [],
}
