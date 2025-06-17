/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        borderRadius: {
          '4xl': '2rem', // optional if you're using custom radius in Image
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  