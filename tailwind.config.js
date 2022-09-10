module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  safelist:[
    {
      pattern: /border-(b|r)-(transparent)/,
    },
    {
      pattern: /border-(l|t)-(black)/,
    },
    "animate-[spin_700ms_infinite_linear]",
    {
      pattern: /border-(2|4|8)/,
    },
  ],
  variants: {
    extend: {},
  },
  plugins: [],
};
