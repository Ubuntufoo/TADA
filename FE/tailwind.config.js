// Purpose: Tailwind CSS configuration file

import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      keyframes: {
        hover: {
        "0%": { transform: "translateY(0)" }, // Start from current position
        "50%": { transform: "translateY(-15%)" }, // Adjust translateY values
        "100%": { transform: "translateY(0)", easing: "ease-out" }, // End at original position with ease-out easing
      },
    },
    animation: {
      hover: "hover 3s infinite ease-in-out", // Adjust duration for a slower bounce
      },
    textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '1px 2px 2px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

