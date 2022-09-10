module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'spin': 'spin 700ms linear infinite',
      }
    },
  },
  safelist:[
    {
      pattern: /border-(b|r)-(transparent)/,
    },
    {
      pattern: /border-(l|t)-(black)/,
    }
  ],
  variants: {
    extend: {},
  },
  plugins: [],
};
