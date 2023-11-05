/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        powderBlue: "#C6DEFF",
        mainColor: "#0C5BC6",
        successColor: "#332C5C",
        headingColor: "#242331",
        grayP: "#797979",
        featureBtn: "#4192ff4d",
        featurePara:"#494369",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        NunitoSans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
