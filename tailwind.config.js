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
          primary: "#3F4F44",
          secondary: "#6D2323",
          accent: "#C14600",
          neutral: "#DCD7C9",
          "base-100": "#FEF9E1",
        },
      },
      "dark",
    ],
  },
};
