/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4eaf4a",
        secondary: "#1d2f42",
        light: "#f2f2f2",
        textMuted: "#7d879c",
        disabled: "#cfcfcf",
        danger: "#f20c0c",
        alertDanger: "#F1E1D8",
        alertInfo: "#CFE6FC",
        alertSuccess: "#6FCF97",
        alertWarning: "#FFF7E2",
        borderColor: "#DFE0E4",
      },
      dropShadow: {
        cardShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
        cardShadowHover: "0 .3rem 1.525rem -.375rem rgba(0, 0, 0, .1)",
        dropShadow: "0 2px 4px rgb(32 32 50 / 25%)",
      },
      fontFamily: {
        FontPoppoins: ["Poppins", "sans-serif"],
        FontUbuntu: ["Ubunty", "sans-serif"],
        FontExo2: ["Exo 2", "sans-serif"],
      },
    },
  },
  plugins: [],
};
