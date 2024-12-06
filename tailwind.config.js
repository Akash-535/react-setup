/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
      },
    },
    extend: {
      fontSize: {
        'custom-6xl':'64px',
           'custom-3xl' : '38px'
             },
             backgroundImage: {
              'hero-bg':"url('./assets/images/webp/hero-background.webp')"          
            },
            lineHeight: {
           'custom-2xl' : '110%',
           'custom-4xl' : '150%',
            },
            colors: {
              'pacific-blue': '#00A8E8',
              'deep-blue':'#00171F'
                  },
                    },
  },
  plugins: [],
}