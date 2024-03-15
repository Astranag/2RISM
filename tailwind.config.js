/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{index.html}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  plugins: [
    require('tailwindcss'),
    // Other PostCSS plugins can be added here
  ]
}
