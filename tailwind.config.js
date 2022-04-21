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
        navShadow: '3px 5px 15px rgba(0, 0, 0, 0.1)',
        jumbotronShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        cardShadow: '3px 3px 4px rgba(0, 0, 0, 0.06)',
      },
      colors: {
        primary: '#713BDB',
        secondary: '#A2A4B9',
        tertiary: '#888CB7',
        muteColor: '#42474A',
      },
    },
  },
  plugins: [],
};
