module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      animation: {
        fade: "fade 250ms ease-in-out",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  safelist: [
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
    "text-white",
    ...["y", "x", "l", "r", "t", "b"].flatMap(
      (dir) => `border-${dir}-[0.375rem]`
    ),
    {
      pattern:
        /border-(l|r|t|b)-(black|blue-700|yellow-500|red-600|neutral-600)/,
    },
    {
      pattern: /bg-(black|blue-700|yellow-500|red-600|neutral-600)/,
    },
    {
      pattern: /m(r|l|t|b)-(\d)+/,
    },
  ],
  variants: {
    extend: {},
  },
  plugins: [],
};
