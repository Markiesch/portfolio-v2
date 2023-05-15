/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      colors: {
        "divider": "var(--border-color)",
        "background-accent": "var(--background-accent)",
        "foreground-muted": "var(--foreground-muted)"
      },
    },
  },
  plugins: [],
};
