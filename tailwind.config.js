/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "auto 1fr",
      },
      gridTemplateRows: {
        layout: "1fr",
      },
      backgroundColor: {
        "email-checked": "#c2dbff"
      }
    },
  },
  plugins: [],
}
