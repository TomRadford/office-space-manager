import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import colors, { transparent } from "tailwindcss/colors";
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      background: "#F8FAFC",
      white: colors.white,
      black: colors.black,
      primary: "#0D4477",
      secondary: "#489DDA",
      gray: "#484954",
      lightBlue: "#E8F3FC",
      dark: "#292D32",
      red: "#F44336",
      selected: "#475569",
      transparent: transparent,
      overlay: "#334155",
      // Office colours are defined in the `OFFICE_COLOURS` constant
    },
    // Keeping tailwind defaults (sans colours) for convenience
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
