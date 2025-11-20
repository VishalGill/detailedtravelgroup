import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0A192F', // Deep Navy
          light: '#172A46',
          dark: '#020C1B',
        },
        secondary: {
          DEFAULT: '#C5A059', // Champagne Gold
          light: '#E5D1B8',
          dark: '#8C7035',
        },
        background: {
          DEFAULT: '#FFFFFF',
          off: '#F9FAFB',
        },
        text: {
          main: '#1A1A1A',
          muted: '#666666',
          light: '#FFFFFF',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to bottom, rgba(10, 25, 47, 0.3), rgba(10, 25, 47, 0.7))',
      },
    },
  },
  plugins: [],
};

export default config;
