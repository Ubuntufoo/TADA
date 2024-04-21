// Purpose: Tailwind CSS configuration file

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
}

