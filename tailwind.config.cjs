/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'canvas-white': '#FFFFFF',
        'canvas-black': '#000000', // Dark mode background
        'canvas-grey': '#F5F5F7', // Apple-like light grey
        'canvas-dark-grey': '#1c1c1e', // Apple dark mode grey
        'text-primary': '#1D1D1F', // Almost black
        'text-inverse': '#F5F5F7', // Almost white for dark mode
        'text-secondary': '#86868B', // Apple grey
        'text-secondary-inverse': '#A1A1A6', // Lighter grey for dark mode
        'accent-blue': '#0071E3', // Apple blue
        'accent-purple': '#5E5CE6', // Apple purple (for highlights)
        'accent-pink': '#FF2D55', // Apple pink
        'accent-cyan': '#30B0C7', // Apple cyan
        'border-color': '#D2D2D7',
        'border-color-dark': '#38383A', // Dark mode border
      },
      fontFamily: {
        'inter': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['SF Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
