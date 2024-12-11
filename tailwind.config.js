/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140px",
        '2xl': '1140px'
      },
    },
    extend: {
      fontSize: {
        'custom-2xl': '32px',
        'custom-3xl': '38px',
        'custom-6xl': '64px',
      },
      backgroundImage: {
        'hero-bg': "url('../public/assets/images/webp/hero-background.webp')"
      },
      lineHeight: {
        'custom-2xl': '110%',
        'custom-4xl': '150%',
        'custom-5xl': '160%'
      },
      colors: {
        'pacific-blue': '#00A8E8',
        'deep-blue': '#00171F',
        'prussian-blue': '#003459',
        'twilight-blue': '#EAF9FFF0',
        'marine': '#003459',
        'astronaut-blue': '#09456B',
        'green-white': '#EBEBEB',
        'lily-white': '#EAF9FF'
      },
      backgroundSize: {
        'custom-cover': '100% 810px'
      },
      boxShadow: {
        'box': '0px 0px 13.9px 0px #0000001A',
      }
    },
  },
  plugins: [],
}