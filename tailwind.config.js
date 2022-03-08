module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary':'#FF4758',
      'secondary':'#668A90',
      'white':'#FFFFFF',
      'gray-1':'#333333',
      'gray-2':'#4d4d4d',
      'gray-3':'#828282',
      'gray-4':'#BDBDBD',
      'gray-4-200':'#BDBDBD33',
      'gray-5':'#E6E6E6',
      'gray-6': '#f2f2f2',
      'light-blue':'#EBF1F4',
      'dark-gray':'#121212',
      'dark-gray-80':'#121212CC',
      'dark-gray-30':'#1212124D'
    },
    fontFamily: {
      proximaNova: ['proxima-nova'],
      gilroy: ['gilroy-extrabold'],
    },
    extend: {
      backgroundImage: {
        'footer-sm': "url('assets/images/bg-footer-mobile.png')",
        'footer-lg': "url('assets/images/bg-footer-desktop.png')",
      }
    },
  },
  plugins: [],
}
