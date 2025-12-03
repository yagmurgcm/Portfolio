/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-avegas)', 'serif']
      },
      colors: {
        linear1: '#6D49D1',
        linear2: '#B149D1',
        linear3: '#D149AD'
      },
      boxShadow: {
        glow: '0 0 80px rgba(177, 73, 209, 0.35)'
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at 15% 20%, rgba(109,73,209,0.5), transparent 55%)'
      }
    }
  },
  plugins: []
};
