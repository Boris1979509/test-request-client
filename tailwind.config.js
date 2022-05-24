module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Roboto"],
    },
    extend: {
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
    container: {
      center: true,
      padding: ".9375rem",
    },
  },
  plugins: [],
};
