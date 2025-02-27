import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      backgroundImage: {
        'hero-gradient': "radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 66%)",
        'rainbow-gradient': "linear-gradient(to right, #DD7DDF, #E1CD86, #BBCB92, #71C2EF, #3BFFFF, #DD7DDF)",
      },
    },
  },
  plugins: [],
};

export default config;
