/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      lg: "778px",
    },
    colors: {
      "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
      "desaturated-dark-blue": "hsl(214, 17%, 51%)",
      "grayish-blue": "hsl(212, 23%, 69%)",
      "light-grayish-blue": "hsl(210, 46%, 95%)",
      "white": "hsl(0, 0%, 100%)",
      "transparent": "transparent",
    },
    spacing: {
      "0": "0rem",
      "15": "0.9375rem",
      "16": "1rem",
      "20": "1.25rem",
      "24": "1.5rem",
      "32": "2rem",
      "36": "2.25rem",
      "40": "2.5rem",
      "285": "17.8125rem",
    },
    fontSize: {
      "13": ["0.8125rem", { lineHeight: "1.25rem" }],
      "16": ["1rem", { lineHeight: "1.5rem" }],
      "20": ["1.25rem", { lineHeight: "1.75rem" }],
    },
    letterSpacing: {
      "02": "0.0125rem",
      "01": "0.00625rem",
    },
    extend: {
      fontFamily: {
        sans: [
          'Manrope',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      maxWidth: {
        "card": "20.4375rem",
        "card-lg": "45.625rem",
      },
      borderRadius: {
        "card": "0.625rem",
      },
    },
  },
  plugins: [],
}
