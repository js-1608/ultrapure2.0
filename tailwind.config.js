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
      }
    },
  },
  plugins: [],
}
