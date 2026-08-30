/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        page: 'var(--vs-page)',
        elevated: 'var(--vs-elevated)',
        surface: 'var(--vs-surface)',
        ink: 'var(--vs-ink)',
        quiet: 'var(--vs-quiet)',
        mute: 'var(--vs-mute)',
        accent: {
          DEFAULT: 'var(--vs-accent)',
          hover: 'var(--vs-accent-hover)',
          ink: 'var(--vs-accent-ink)',
        },
        atmosphere: 'var(--vs-atmosphere)',
        arch: {
          1: 'var(--vs-arch-1)',
          2: 'var(--vs-arch-2)',
          3: 'var(--vs-arch-3)',
        },
      },
    },
  },
  plugins: [],
};
