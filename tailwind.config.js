module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      borderRadius: {
        xs: '4px',
      },
      colors: {
        primary: '#0b0968',
        secondary: '#054a07',
        accent: '#b37c02',
      },
      screens: {
        xs: '414px',
      },
    },
  },
  plugins: [],
}
