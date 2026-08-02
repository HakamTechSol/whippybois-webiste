/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf2ff',
          100: '#fbe8ff',
          200: '#f6d0ff',
          300: '#eea9ff',
          400: '#e373ff',
          500: '#d13bff',
          600: '#b915f2',
          700: '#9c0fd0',
          800: '#7e0fa5',
          900: '#671283',
        },
        // Warm neutral base + light lavender band for visual rhythm
        cream: {
          50: '#fdfbf8',
          100: '#faf7f3',
          200: '#f3ede5',
        },
        lavender: {
          50: '#faf7fd',
          100: '#f6f0fb',
          200: '#efe4f8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Layered, soft shadows (not flat drop-shadows)
        soft: '0 4px 12px -4px rgba(17, 24, 39, 0.06), 0 24px 48px -16px rgba(185, 21, 242, 0.12)',
        card: '0 2px 4px -2px rgba(17, 24, 39, 0.04), 0 12px 28px -10px rgba(17, 24, 39, 0.10)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
