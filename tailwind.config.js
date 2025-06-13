/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // Add other paths if needed
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        // add more if you use them (card, accent, etc)
      },
    },
  },
  darkMode: "class", // if you use .dark for dark mode
  plugins: [],
};
