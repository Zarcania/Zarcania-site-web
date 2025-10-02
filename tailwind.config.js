/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'futuristic': ['Orbitron', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        'ultra-futuristic': ['Audiowide', 'Orbitron', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        'modern': ['Exo 2', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
