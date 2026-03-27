import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1f1d2b',
        mist: '#f8f4fb',
        accent: '#8b5cf6',
        rose: '#ec4899',
        plum: '#6d4fa7'
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(35, 24, 61, 0.22)'
      }
    }
  },
  plugins: []
};

export default config;
