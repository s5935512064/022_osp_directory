import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryOwn: "#0a3254",
    },

    extend: {
      fontFamily: {
        fc_ekaluckregular: ["var(--font-fc_ekaluckregular)"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xs: "380px",
      // => @media (min-width: 560px) { ... }
      sm: "640px",
      // => @media (min-width: 560px) { ... }
      md: "760px",

      xmd: "840px",
      // => @media (min-width: 1024px) { ... }
      lg: "1024px",
      // => @media (min-width: 1280px) { ... }
      xl: "1280px",
      // => @media (min-width: 1440px) { ... }

      xxl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
export default config;
