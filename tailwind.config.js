/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'laptopXL': { 'max': '1920px' },
      'screen-1170px': { 'max': '1770px' },
      'laptopL': { 'max': '1440px' },
      'laptopM': { 'max': '1366px' },
      'laptopS': { 'max': '1280px' },
      'laptop': { 'max': '1024px' },
      'tabletL': { 'max': '820px' },
      'tabletM': { 'max': '640px' },
      'mobileL': { 'max': '425px' },
      'mobileM': { 'max': '375px' },
      'mobileS': { 'max': '320px' },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
