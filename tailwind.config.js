/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#001219',
        secondary: '#192930',
        tertiary: '#324146',
        accent: '#0A9396',
        light: '#EEEEEE',
      }
    },
  },
  plugins: [],
}

