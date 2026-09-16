/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0a0a',
          charcoal: '#1a1a1a',
          dark: '#2d2d2d',
          accent: '#ff4444',
          'accent-light': '#ff6b6b',
          'accent-dark': '#dd0000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(255, 68, 68, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(255, 68, 68, 0.6)' },
        }
      },
      backdropFilter: {
        'glass': 'backdrop-filter: blur(10px)',
      }
    },
  },
  plugins: [],
}
