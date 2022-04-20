module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Segoe UI"'],
      },
      fontSize: {
        xs: ['10px', '13px'],
        sm: ['10px', '13px'],
        lg: ['16px', '21px'],
        xl: ['55px', '73px'],
      },
      boxShadow: {
        sideBarShadow: '10px 3px 15px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        primary: '#713BDB',
        secondary: '#A2A4B9',
        tertiary: '#888CB7',
      },
      keyframes: {
        translateXLeftToRightfull: {
          '00%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        customTransX: 'translateXLeftToRightfull 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
