/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      animation: {
        "moves-left": "moves-left 10s ease-in-out  infinite  ",
      },
      keyframes: {
        "moves-left": {
          "0%": { transform: "translateX(0)" },
          "30%": { transform: "translateX(0)" },
          "34%": { transform: "translateX(-100vw)" },
          "64%": { transform: "translateX(-100vw)" },
          "68%": { transform: "translateX(-200vw)" },
          "98%": { transform: "translateX(-200vw)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
