import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "red-rauma": "#ae282f",
        "gray-rauma-bold": "#6d6d6f",
        "gray-rauma-medium": "#a6a6a6",
        "gray-rauma-light": "#c5c1be",
      },
      gridTemplateColumns: {
        "custom-columns": "repeat(3, .5fr) repeat(2, 1fr)",
      },
      gridTemplateRows: {
        "custom-rows": ".7fr repeat(3, 1fr) .5fr",
      },
    },
  },
  plugins: [],
};
