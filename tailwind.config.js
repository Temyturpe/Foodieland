/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "850px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536",
    },
    extend: {
      fontFamily: {
        lobster: ["Lobster"],
        inter: ["Inter"],
      },
      backgroundImage: {
        greenimg: 'url("./assets/bg-green.png")',
        subg: 'url("./assets/subbg.png")',
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [],
}
