import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefaff',
          100: '#d9f2ff',
          200: '#b6e6ff',
          300: '#83d5ff',
          400: '#45bdff',
          500: '#159eff',
          600: '#0b79db',
          700: '#0b60ad',
          800: '#0e4f8a',
          900: '#0f426f',
        },
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};

export default config;



