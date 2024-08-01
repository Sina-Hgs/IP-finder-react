/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        lightBackground: "#FAFAFA",
        primary: "#FFFFFF",
        secondary: "#F6F7F9",
        bluePrimary: "#0C317C",
        blueSecondary: "#1043A6",
      },
      colors: {
        bluePrimary: "#0C317C",
        blueSecondary: "#1043A6",
        darkPrimary: "#313235",
        darkSecondary: "#7E838F",
        lightPrimary: "#F9F5FF",
        error: "#d10000",
      },
      borderColor: {
        primary: "#EAECF0",
        bluePrimary: "#0C317C",
        error: "#d10000",
      },
      fontSize: {
        sm: "14px",
        md: "16px",
      },
      fontFamily: {
        IranSans: "IRANSansWeb",
      },
    },
  },
  plugins: [],
};
