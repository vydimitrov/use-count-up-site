module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
    fontFamily: {
      mono: ["Inconsolata", "Courier New", "Courier"],
      heading: [
        "Alegreya Sans SC",
        "system-ui",
        "-apple-system",
        "Arial",
        "Helvetica",
      ],
      body: "'Open Sans', Arial, Helvetica",
    },
  },
  variants: {},
  plugins: [],
};
