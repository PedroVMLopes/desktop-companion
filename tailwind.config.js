/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        vt323: ["VT323", "sans-serif"],
        cormorant: ["Cormorant", "sans-serif"],
        lobsterTitle: ["Lobster", "sans-serif"],
        lobsterText: ["Lobster Two", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customTheme: {
          primary: "#4A4947",
          secondary: "#3F4F44",
          accent: "#C14600",
          neutral: "#DCD7C9",
          "base-100": "#FEF9E1",
        },
      },
      "business",
    ],
  },
};
