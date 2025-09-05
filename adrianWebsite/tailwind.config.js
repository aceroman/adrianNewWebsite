import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '175': '1.75',
      },
      animation: {
        shine: 'shine 3s linear infinite',
        wave: 'wave 2s ease-in-out infinite'
      },
      keyframes : {
        shine: {
          '0%': {backgroundPosition: '200% 0%'},
          '100%': {backgroundPosition: '-200% 0%'}
        },
        wave: {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-20px)'},
        },
      },
    },
  },
  plugins: [],
}

