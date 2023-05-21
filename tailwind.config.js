/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      fontFamily: {
        "sans": "Poppins, Helvetica, Arial, sans-serif"
      },
      colors: {
        "divider": "var(--border-color)",
        "background-accent": "var(--background-accent)",
        "foreground-muted": "var(--foreground-muted)"
      },
    },
  },
  plugins: [],
};
