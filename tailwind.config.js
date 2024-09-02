// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textBlue: '#1D9AD6',
        ultragreen:'#90C03E',
        productbanner:'#818181'
      },
      borderRadius: {
        large:'25%',
      },animation: {
        'glow': 'glow 2s infinite',
      },  keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6' },
          '50%': { boxShadow: '0 0 20px #60a5fa, 0 0 40px #60a5fa' },
        },
      },
    },
  },
  plugins: [],
}
