/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rugmysol-purple': '#9C4FFF',
        'rugmysol-blue': '#00E0FF',
        'rugmysol-dark': '#0A0A0A',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px #9C4FFF, 0 0 20px #9C4FFF, 0 0 30px #9C4FFF' },
          '100%': { boxShadow: '0 0 20px #00E0FF, 0 0 30px #00E0FF, 0 0 40px #00E0FF' },
        },
      },
    },
  },
  plugins: [],
}
