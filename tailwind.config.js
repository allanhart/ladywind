/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./htdocs/**/*.{html,js}"],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      // slate: colors.slate,
      // gray: colors.gray,
      // zinc: colors.zinc,
      // neutral: colors.neutral,
      primary: '#ffffff',
      secondary: 'rgb(255, 188, 188)',
    }),
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '900px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      scale: {
        '150': '1.50',
        '200': '2.00',
      },
    },
  },
  plugins: [],
}
