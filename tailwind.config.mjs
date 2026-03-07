/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edfcf2',
          100: '#d4f7e0',
          200: '#acedc6',
          300: '#75dea5',
          400: '#3dc87f',
          500: '#1aad63',
          600: '#0d8b4f',
          700: '#0b6f41',
          800: '#0c5835',
          900: '#0b482d',
          950: '#042819',
        },
        surface: {
          0: '#09090b',
          50: '#0c0c0f',
          100: '#111114',
          200: '#18181b',
          300: '#1f1f23',
          400: '#27272a',
          500: '#3f3f46',
          600: '#52525b',
          700: '#71717a',
          800: '#a1a1aa',
          900: '#d4d4d8',
          950: '#fafafa',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'in': 'fadeInUp 0.5s ease-out both',
        'in-slow': 'fadeInUp 0.7s ease-out both',
        'in-scale': 'scaleIn 0.4s ease-out both',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(239,68,68,0.1)' },
          '50%': { boxShadow: '0 0 24px rgba(239,68,68,0.2)' },
        },
      },
    },
  },
  plugins: [],
};
