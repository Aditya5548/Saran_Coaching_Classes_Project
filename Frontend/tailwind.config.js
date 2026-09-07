/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1020',
        cream: '#f7f4ee',
        gold: '#d7aa52',
        rose: '#d75f6f',
        mist: '#eef2f7'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(11, 16, 32, 0.10)',
        glow: '0 15px 50px rgba(215, 170, 82, 0.22)'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      }
    }
  },
  plugins: []
};
