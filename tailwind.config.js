/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "fade-out-down": "fade-out-down : 0.5s ease-out"
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0)"
          },
          to: {
            opacity: '0',
            transform: 'translateY(40%)'
          }
        }
      },
    },
  },
  plugins: [],
}
