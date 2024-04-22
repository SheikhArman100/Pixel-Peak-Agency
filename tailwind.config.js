/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        blackColor:"#130e19",
        purpleColor:"#7b0cf9",
        greenColor:"hsl(72.5,72.6%,71.4%)",
        whiteColor:"#fcfaff",
        blueColor:"hsl(210,26.8%,78%)",
        greyColor:"#97909e",
        orangeColor:"#e87b38"
      }
    },
  },
  plugins: [],
};
