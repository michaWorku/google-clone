module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        bgBlack: "#1a1a1a",
      },
      flex: {
        max: "1 1 100%",
      },
      transitionProperty: {
        position: "left, top, right, bottom",
      },
      screens: {
        xs: "480px",
      },
      maxWidth: {
        screenXs: "480px",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};
