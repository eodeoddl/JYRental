import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        header: "minmax(auto, 100px) 1fr",
        "header-lg": "100px 1fr auto",
      },
      colors: {
        primary: {
          blue: "#01A0E9",
          orange: "#ED6A00",
        },
        btn: {
          "light-blue": "#01A0E9",
          "dark-blue": "#006A9B",
          gray: "#DDDDDD",
          "light-orange": "#ED6A00",
          "dark-orange": "#CD6511",
        },
        default: {
          "light-blue": "#F8FAFC",
          black: "#171717",
          "dark-gray": "#454545",
          gray: "#858585",
        },
      },
    },
  },
  plugins: [
    require("./tailwind_plugins/paragraph.ts"),
    require("./tailwind_plugins/headings.ts"),
    require("./tailwind_plugins/button.ts"),
    require("./tailwind_plugins/selectChild.ts"),
    require("@tailwindcss/container-queries"),
  ],
};
export default config;
