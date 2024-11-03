/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        c1: "#9538E2",
        c2: "#0B0B0B",
        c3: "#09080F99",
      },
      fontFamily: {
        sora: "Sora, sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
