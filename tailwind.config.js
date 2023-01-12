/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        doctorsTheme: {
          primary: "#3A8EF6",
          secondary: "#E2EDFF",
          headertext: "#031432",
          text: "#6C87AE",
          accent: "#67CBA0",
          backgroundColor: "#F2F7FF",
          neutral: "#181A2A",

          "base-100": "#FFFFFF",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
