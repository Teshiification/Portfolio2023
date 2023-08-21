// eslint-disable-next-line global-require
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        vicious: {
          primary: '#6A85B6',
          secondary: '#BAC8E0',
          white: '#c4ccd4',
          gray: '#485563',
          black: '#29323C',
        },
        body: '#29323C',
      },
      fontFamily: {
        sora: ['"Sora"', ...defaultTheme.fontFamily.sans],
        lobster: ['"Lobster"', ...defaultTheme.fontFamily.sans],
      },
      gradientColorStops: {
        arendelle: 'bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500',
      },
      boxShadow: {
        '3xl': '0 6px 6px #485563C0',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
