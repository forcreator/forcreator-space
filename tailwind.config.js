/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        brown: {
          50: '#FDF8F6',  // Lightest beige from the image
          100: '#F5E6DB', // Light warm beige
          200: '#E8D5C7', // Warm beige
          300: '#D9C3B8', // Medium warm beige
          400: '#C5A99A', // Light brown
          500: '#B08E7B', // Medium brown
          600: '#96715C', // Darker brown
          700: '#7C5B4A', // Rich brown
          800: '#634738', // Deep brown
          900: '#43302B', // Darkest brown from the image
        },
        sand: {
          50: '#FDFCFB',
          100: '#F7F3F0',
          200: '#EFE9E4',
          300: '#E7DED7',
          400: '#DFD3CA',
          500: '#D7C8BD',
          600: '#CFC0B3',
          700: '#C7B7A9',
          800: '#BFAE9F',
          900: '#B7A595',
        }
      },
      backgroundImage: {
        'grain': "url('data:image/png;base64,data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vz08vT09vT8+vzs7uxH16TeAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAuFJREFUOI0Vk+3NLiEIRG1B8ClAYAsQ2AIEt4D9ePtv5Xp/mZgYJ2fOFJKEfInkVWY2aglmQFkimRTV7MblYyVqD7HXyhKsSuPX12MeDhf6YaUo8jrXFWx3oWDLxB2QBC/dA+dIYILhxAJMwKPCxDk0voAjAA6wBGR/ZQdYQH5wBQqp9fOAPRDqL/CFgwLIoRUIc0owMz/gZzLTN4W/CcNA5L2FQR7kYC5/WRcW9VAfA6HgpXu6kAHhM2/r5wI0uHECRqlPZpKNL63nGriBXixBhQeMA83gqsIWBAYHa31Z+F6BB9MAFw6jNnAwPUgUhYWn+s2B+/B1YBCoDkz3R6kRt6BZ8tT3/2LBDPgFhV2A5BnAS0CHuhdvqZwDMF66BwQ7eIYNygtBAX4TL3xp/3dgtoeDBwGVS+QAgC3+xF6oXYGnhIsB+DoDiQYk/2OBhTZhYa5ZkQCFLQjAw4UqBl6AIhYBE/jJrYCDHsBHCGQiAEH4gQAD8SBHuACRGa4OsNEVKgYDwMdtAQN4EKAPCIgT+wJ4qx/qQLgBXQFGAN4RwN7PwGR/svEVRoAFPwCDzz1IHzh1fwAQhQkJIAMP8gAAAABJRU5ErkJggg==')",
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
    },
  },
  plugins: [],
}