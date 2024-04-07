import { animate } from "./src/tailwindcss-plugins/animate";

/** @type {import('tailwindcss').Config} */
export default {
  important: "#mud-login",
  corePlugins: {
    // We include this manually so we can prefix it
    preflight: false,
  },
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [animate],
};
