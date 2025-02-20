/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customTheme: {
          primary: "#6D2323",
          secondary: "#2C3930",
          accent: "#3B6790",
          neutral: "#E5D0AC",
          "base-100": "#FEF9E1",
        },
      },
      "dark",
    ],
  },
};
