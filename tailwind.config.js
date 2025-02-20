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
          primary: "#A31D1D",
          "primary-content": "#6D2323",
          secondary: "#3F4F44",
          "secondary-content": "#2C3930",
          accent: "#9F5255",
          "accent-content": "#7C444F",
          neutral: "#E5D0AC",
          "base-100": "#FEF9E1",
        },
      },
      "dark",
    ],
  },
};
