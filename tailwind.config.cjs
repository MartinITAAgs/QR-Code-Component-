/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        slate300: 'hsl(212, 45%, 89%)',
        slate500: 'hsl(216, 15%, 48%)',
        slate900: 'hsl(218, 44%, 22%)',
      },
    },
  },
  plugins: [],
};
