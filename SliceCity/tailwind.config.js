module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths to match your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          DEFAULT:"2rem",
          sm:"1rem",
        },
      },
    },
  },
  plugins: [],
};
