/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        lightBackground: "#FAFAFA",
        primary: "#FFFFFF",
        secondary: "#F6F7F9",
      },
      colors: {
        bluePrimary: "#1043A6",
        blueSecondary: "#1043A6",
        darkPrimary: "#313235",
        darkSecondary: "#7E838F",
        lightPrimary: "#F9F5FF",
      },
      borderColor: {
        primary: "#EAECF0",
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
