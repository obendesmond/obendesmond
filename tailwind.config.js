module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myGreen: "#009743",
        myYellow: "#ffcb0a",
        myDark: "#020D16",
        myBorder: "#0F102A",
        myOrange: "#F09329",
        myDark2: "#1A1A17",
        mySkillEmpty: "#6E767C",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
