/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        secondaryBg: "#F7F7F7",
        cardBg: "#FFFFFF",
        highlightBg: "#EFEFEF",
        textPrimary: "#111111",
        textSecondary: "#555555",
        textMuted: "#888888",
        borderMain: "#E5E5E5",
        borderDark: "#111111",
        accent: "#222222",
        accentMuted: "#DCDCDC",
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        handwritten: ['"Kalam"', 'cursive', 'sans-serif'],
      },
      boxShadow: {
        'manga': '4px 4px 0px #111111',
        'manga-hover': '6px 6px 0px #111111',
        'manga-sm': '2px 2px 0px #111111',
        'editorial': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'window': '0 16px 40px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px #E5E5E5',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 3s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      }
    },
  },
  plugins: [],
}
