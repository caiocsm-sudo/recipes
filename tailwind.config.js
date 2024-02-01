/** @type {import('tailwindcss').Config} */
import catppuccin from "@catppuccin/tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [catppuccin({ prefix: "ctp", defaultFlavour: "mocha" })],
};
