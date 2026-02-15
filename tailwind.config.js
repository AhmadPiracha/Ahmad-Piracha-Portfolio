/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        accent: {
          cyan: "#00d9ff",
          emerald: "#10b981",
          violet: "#8b5cf6",
          pink: "#ec4899",
          orange: "#f97316",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        "glow-sm": "0 0 20px rgba(0, 217, 255, 0.3)",
        "glow-lg": "0 0 40px rgba(139, 92, 246, 0.4)",
        "elevated": "0 8px 32px rgba(31, 38, 135, 0.37)",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(4px)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bgImage.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "gradient-shift": "gradient-shift 3s ease infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
