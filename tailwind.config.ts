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
      // Office colours are defined in the `OFFICE_COLOURS` constant
    },
    // Keeping tailwind defaults (sans colours) for convenience
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
