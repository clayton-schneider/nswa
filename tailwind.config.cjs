/** @type {import('tailwindcss').Config} */

const FONT_FAMILY_BASE = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Open Sans",
  "Helvetica Neue",
  "sans-serif",
];

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#3DC9F2",
        "text-light": "#FFFFFF",
        "text-dark": "#000000",
      },
      padding: {
        edge: "2.5%",
      },
      fontFamily: {
        sans: ["Poppins", ...FONT_FAMILY_BASE],
        rubik: ["Rubik", ...FONT_FAMILY_BASE],
      },
    },
  },
  plugins: [],
};
