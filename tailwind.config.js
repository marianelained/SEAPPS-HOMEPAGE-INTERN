/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {

        backgroundColor: {
          'primary': '#161d6f', 
          'secondary': '#ffed4a',
          'navBar' : '#0369a1' 
        },
        borderColor: {
          'primary' : '#007bff',
        },

        padding: {
          '3.75' : '0.375rem'
        },
        fontFamily: {
          custom: [
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
          ],
        },
        gradientColors: {
          'custom': {
            'start': '#FFD700',
            'end': '#161d6f',   
          },
        },
        colors: {
          'custom-blue': '#67e8f9',
          'bright-red': '#FF0000',
          'dark-blue': '#0B091B',
          'default-blue': '#00558D',
          'extra-blue': '#0E1B4D',
        },
        container: {
          center: true,
          padding: "1 rem",
          sm: "2 rem",
        }

    },
  },

  variants: {
    extend: {
      borderColor: ['focus'],
      ringColor: ['focus'],
    },
  },
  plugins: [],
}

