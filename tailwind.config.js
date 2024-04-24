/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: true, // applies background color and foreground color for root element (body)
    styled: true, // include daisyUI colors and design decisions for all elements
    utils: true, // include daisyUI utility classes for spacing, sizing, etc.
    prefix: "daisy-", // change the prefix for daisyUI classes
    logs: true, // show console logs for daisyUI
    themeRoot: ":root", // the element to apply the theme colors to
    themes: ["sunset", "nord", "dim", "dracula"],
  },
};
