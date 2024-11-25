/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white_color: "var(--white-color)",
        black_363738: "var(--black_363738)",
        white_F5F5F5: "var(--white_F5F5F5)",
        white_FEFAF1: "var(--white_FEFAF1)",
        white_FAFAFA: "var(--white_FAFAFA)",
        text_7D8184: "var(--text_7D8184)",
        text_000000: "var(--text_000000)",
        red: "var(--red)",
        button_00FF66: "var(--button_00FF66)",
        button_DB4444: "var(--button_DB4444)",
        hoverbutton_E07575: "var(--hoverbutton_E07575)",
        hoverbutton_A0BCE0: "var(--hoverbutton_A0BCE0)",
        
      },
      fontFamily:{
        popins: "var(--Poppins)",
        Inter: "var(--Inter)",

      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}