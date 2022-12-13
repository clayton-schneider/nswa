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
        "text-dark": "#5A5A5A",
        "text-green": "#42563E",
        "text-off-white": "#E1E1E1",
      },
      fontSize: {
        bg: "350px",
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
