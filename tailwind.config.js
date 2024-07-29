/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-10%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 1, transform: "translateY(-10%)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.6s forwards",
        slideUp: "slideUp 0.6s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
