/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neon EVM Brand Colors
        neon: {
          fuchsia: '#FF00AA',
          purple: '#E200F1',
          violet: '#8e1cf1',
          'light-pink': '#ff86ff',
          'dark-violet': '#6710dd',
          green: '#24e4b3',
          'dark-purple': '#bc11e1',
          blue: '#340ceb',
          'light-green': '#73fdea',
        },
        // Updated primary colors to use Neon brand
        primary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'Arial', 'sans-serif'],
        display: ['var(--font-syne)', 'Syne', 'sans-serif'],
      },
      backgroundImage: {
        'neon-gradient-1': 'linear-gradient(135deg, #8B00B1 0%, #0E0060 50%, #090909 100%)',
        'neon-gradient-2': 'linear-gradient(135deg, #8E1CF1 0%, #6710DD 50%, #FF86FF 100%)',
        'neon-gradient-3': 'linear-gradient(135deg, #91C8FF 0%, #73FDEA 100%)',
        'neon-gradient-4': 'linear-gradient(135deg, #BC11E1 0%, #FF00AA 50%, #8E1CF1 100%)',
        'neon-gradient-5': 'linear-gradient(135deg, #340CEB 0%, #73FDEA 50%, #249CFE 100%)',
        'neon-gradient-6': 'linear-gradient(135deg, #8E1CF1 0%, #BC11E1 50%, #73FDEA 100%)',
        'neon-gradient-7': 'linear-gradient(135deg, #249CFE 0%, #340CEB 50%, #19FB9B 100%)',
        'neon-gradient-8': 'linear-gradient(135deg, #50BBFF 0%, #9945FF 100%)',
      },
    },
  },
  plugins: [],
} 