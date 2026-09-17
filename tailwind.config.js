/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        accent: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          foundation: '#F59E0B',
          endowment: '#E11D48',
          music: '#8B5CF6',
          aas: '#EC4899',
          vmf: '#22C55E',
          dna: '#38BDF8',
          qara: '#F97316',
          networking: '#6366F1',
        }
      }
    },
  },
  plugins: [],
}
