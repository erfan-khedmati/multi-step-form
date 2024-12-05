/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Navbar.js",
    "./src/Pages/Page1.js",
    "./src/components/NavigatorButton.js"
  ],
  theme: {
    extend: {
      fontSize: {
        base: '16px',
      },
      colors: {
        // Primary
        marine_blue: "hsl(213, 96%, 18%)",
        purplish_blue: "hsl(243, 100%, 62%)",
        pastel_blue: "hsl(228, 100%, 84%)",
        light_blue: "hsl(206, 94%, 87%)",
        strawberry_red: "hsl(354, 84%, 57%)",

        // Neutral
        cool_gray: "hsl(231, 11%, 63%)",
        light_gray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        wihte: "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

