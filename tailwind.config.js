/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      gs: ["'General Sans', sans-serif"],
    },
    colors: {
      black: "#303030",
      white: "#ffffff",
      violet: "#EDCAE5",
      yellow: "#F6FFBC",
      pink: "#FFC2C2",
      grey: "#E2E2E2",
    },
    fontSize: {
      h1: "clamp(1.75rem, 0.9238rem + 3.5156vw, 4rem)",
      p: "clamp(1rem, 0.8164rem + 0.7813vw, 1.5rem)",
      h2: "clamp(1.5rem, 1.1328rem + 1.5625vw, 2.5rem)",
    },
    extend: {},
  },
  plugins: [
    // Add plugins here
    require("daisyui"),
  ],
};
