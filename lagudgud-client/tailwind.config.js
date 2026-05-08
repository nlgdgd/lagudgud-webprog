/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Add this line so you can use className="font-gsans"
        gsans: ['"Google Sans Flex"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}