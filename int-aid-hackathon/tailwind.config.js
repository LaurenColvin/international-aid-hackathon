module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
      mytheme: {
        "primary": "#006BA6",
        "secondary": "#5DA271",
        "accent": "#EDAE49",
        "neutral": "#F05D5E",
        "base-100": "white",
        "info": "#E7DFE8",
      },
    },
    ],
  },
}
