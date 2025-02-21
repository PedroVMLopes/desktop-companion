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
        Shrikhand: ["Shrikhand", "sans-serif"],
        Paprika: ["Paprika", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customTheme: {
          primary: "#3E3232",
          secondary: "#948979",
          accent: "#C14600",
          neutral: "#F4EAE0",
          "base-100": "#FEF9E1",
          error: "8c0327",
        },
        customDark: {
          primary: "#F4EAE0",
          secondary: "#AB886D",
          accent: "#C14600",
          neutral: "#2C3930",
          "base-100": "#3e3232",
          error: "8c0327",
        },
      },
      "business",
      "forest",
      "coffee",
      "dim",
      "black",
    ],
  },
};
