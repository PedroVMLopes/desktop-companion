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
          primary: "#232020",
          secondary: "#674636",
          accent: "#C14600",
          neutral: "#F4EAE0",
          "base-100": "#FEF9E1",
          info: "#DCD7C9",
          error: "#8c0327",
        },
        customDark: {
          primary: "#F4EAE0",
          secondary: "#bec6a0",
          accent: "#C14600",
          neutral: "#445D48",
          "base-100": "#3F4F44",
          info: "#3f4f44",
          error: "#8c0327",
        },
      },
    ],
  },
};
