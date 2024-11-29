/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        bounce: 'bounce 1s infinite', // This defines the bounce animation
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)', // Start and end position
          },
          '50%': {
            transform: 'translateY(-10px)', // Bounce up halfway
          },
        },
      },
    },
  },
  plugins: [],
}
