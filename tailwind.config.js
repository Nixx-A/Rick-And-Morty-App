/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        sky: "url('/Sky.jpg')",
        rick: "url('/RickMorty.webp')",
        stars: "url('/Stars.webp')",
        stars2: "url('/Stars2.webp')"
      }
    },
    plugins: []
  }
}
