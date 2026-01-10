/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors based on the design system
        deepPurple: '#240046',   // Primary Dark Background
        charcoal: '#1A1A1A',       // Secondary Dark/Surface
        electricTeal: '#00F0FF', // Accent/Action Color

        // Text colors
        'off-white': '#F3F4F6',
      },
      fontFamily: {
        // Typography based on the design system
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}