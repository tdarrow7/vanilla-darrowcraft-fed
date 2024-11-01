import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'bounce-once': 'bounce 1s linear 2s'
      },
      keyframes: {
        bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
        },
        '50%': {
          transform: 'translateY(0)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
        }
}
      },
      colors: {
        'primary': 'rgb(144 94 68)',
        'secondary': 'rgb(96 63 46)',

      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

};
export default config;

