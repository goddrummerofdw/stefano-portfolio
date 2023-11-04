/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#ffffff", // Light Mode 
        secondary: "#000000",// Dark Mode
        main: "#FD5956"
      },
      textColor: {
        primary: "#000000",
        secondary: "#ffffff",
        main: "#FD5956"
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
    }
  },
  plugins: [],
}
