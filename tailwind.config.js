/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#00BFA5',     // Main primary color
          darkTeal: '#00897B', // Darker shade for hovers
          lightTeal: '#E0F2F1',// Very light teal for backgrounds
          navy: '#263238',     // Dark text/backgrounds
          slate: '#455A64',    // Secondary text
          light: '#F8FAFC',    // Off-white background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px rgba(0, 191, 165, 0.1)',
      }
    },
  },
  plugins: [],
}
