/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#2567a9',
        darkBlue: '#255489',
        yellow: '#f3d259',
        darkYellow: '#db9833',
        text: '#1d1d23',
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0.1" },
          "100%": { opacity: "1" },
        },
        jump: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(0)" },
          "70%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 2s ease-out forwards",
        "jump": "jump 0.6s ease-out",
      },
    },
  },
  plugins: [],
}

