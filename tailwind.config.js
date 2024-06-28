/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#344e41',
        secondary: '#3a5a40',
        tertiary: '#588157',
        quaternary: '#a3b18a',
        accent: '#dad7cd'
      }
    },
  },
  plugins: [],
}

