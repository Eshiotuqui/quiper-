/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f8fafc',
        secondary: '#f1f5f9',
        accent: {
          DEFAULT: '#38bdf8',
          light: '#7dd3fc',
          dark: '#0ea5e9',
        },
        surface: {
          DEFAULT: '#ffffff',
          light: '#f1f5f9',
        },
        gold: '#38bdf8',
        coral: '#0ea5e9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 60s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-100% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(56, 189, 248, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(56, 189, 248, 0.6), 0 0 50px rgba(56, 189, 248, 0.2)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
