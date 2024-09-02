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
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(144, 189, 62, 0.7), 0 0 50px rgba(144, 189, 62, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(144, 189, 62, 0.7), 0 0 60px rgba(144, 189, 62, 0.9)',
          },
        },
      },
    },
  },
  plugins: [],
}
