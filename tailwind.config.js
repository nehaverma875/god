/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkslategray: {
          "100": "#1f365b",
          "200": "#17375e",
        },
        gray: {
          "100": "rgba(0, 0, 0, 0.5)",
          "200": "rgba(0, 0, 0, 0.7)",
        },
        slateblue: "#1836b2",
        royalblue: "#3d5cd9",
        midnightblue: "#020c6b",
      },
      spacing: {},
      fontFamily: {
        "uber-move": "'Uber Move'",
        inter: "Inter",
      },
      borderRadius: {
        "8xs-4": "4.4px",
        "10xs-3": "2.3px",
        "11xs-9": "1.9px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

