/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        body: '#000000',
        primary: '#0b38ea',
        secondary: '#fef9e7',
        gray: '#dde0f4',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
