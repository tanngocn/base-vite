/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "960px",
      lg: "1200px",
      xl: "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        mobile: "2rem",
        tablet: "4rem",
        desktop: "5rem",
        extra_desktop: "6rem",
      },
      screens: {
        mobile: "600px",
        tablet: "900px",
        desktop: "1200px",
        extra_desktop: "1536px",
      },
    },
    extend: {
      colors: {
        primary: "#00ff97",
      },
    },
  },
  plugins: [],
};
