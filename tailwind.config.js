/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    // screen: {
    //   sm: "576px",
    //   md: "768px",
    //   lg: "992px",
    //   xl: "1200px",
    // },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#fd3d57",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

