/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      screen: "1280px",
      laptop: "1024px",
      tabletlg: "840px",
      tablet: "640px",
      mobile: "480px",
    },
    extend: {
      colors: {
        main: "#6EFFA8",
        dark: "#262525",
      },
      fontFamily: {
        outfit: ["Outfit"],
      },
    },
  },
  plugins: [],
};
