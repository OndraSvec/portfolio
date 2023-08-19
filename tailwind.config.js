/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        customBreakPoint: {
          raw: "(min-height: 669px) and (max-height: 671px) and (min-width: 1023px) and (max-width: 1025px)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
