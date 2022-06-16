/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: "hsl(257, 40%, 49%)",
        softMagenta: "hsl(300, 69%, 71%)",
      },
      fontFamily: {
        openSans: "Open Sans",
        poppins: "Poppins",
      },
      backgroundImage: {
        desktop: "url('/bg-desktop.svg')",
        mobile: "url('/bg-mobile.svg')",
      },
    },
  },
  plugins: [],
}
