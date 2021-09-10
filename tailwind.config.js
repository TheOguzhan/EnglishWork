module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        70: "70%",
      },
      minWidth: {
        "200px": "200px",
      },
      minHeight: {
        "200px": "200px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
