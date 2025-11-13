/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          midnight: "#0B0F14",
          gunmetal: "#111827",
          navy: "#0A2540",
          silver: "#C0C5CE",
          ivory: "#F5F5F5",
          gold: "#D4AF37",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "'Montserrat'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(212, 175, 55, 0.15)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top, rgba(212,175,55,0.08), transparent 45%), radial-gradient(circle at 10% 20%, rgba(255,255,255,0.04), transparent 25%)",
      },
    },
  },
  plugins: [],
};
