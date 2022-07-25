/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          100: 'rgba(255, 97, 76, 0.2)',
          400: '#FF8272',
          500: '#FF614C',
          600: '#C53724',
          light: '#C53724',
          DEFAULT: '#FF614C',
          dark: 'rgba(255, 97, 76, 0.2)',
        },
        orange: {
          100: 'rgba(254, 127, 46, 0.2)',
          400: '#FC9858',
          500: '#FE7F2E',
          600: '#D15A0E',
          light: '#D15A0E',
          DEFAULT: '#FE7F2E',
          dark: 'rgba(254, 127, 46, 0.2)',
        },
        green: {
          100: 'rgba(10, 207, 131, 0.2)',
          400: '#2CDE9A',
          500: '#0ACF83',
          600: '#299702',
          light: '#299702',
          DEFAULT: '#0ACF83',
          dark: 'rgba(10, 207, 131, 0.2)',
        },
        blue: {
          50: 'rgba(30, 167, 255, 0.1)',
          100: 'rgba(30, 167, 255, 0.2)',
          400: '#75C9FF',
          500: '#1EA7FF',
          600: '#0F7EC6',
          light: '#0F7EC6',
          DEFAULT: '#1EA7FF',
          dark: 'rgba(30, 167, 255, 0.2)',
        },
        purple: {
          50: 'rgba(80, 81, 249, 0.1)',
          100: 'rgba(80, 81, 249, 0.2)',
          400: '#6869FF',
          500: '#5051F9',
          600: '#1E1FA0',
          light: '#1E1FA0',
          DEFAULT: '#5051F9',
          dark: 'rgba(80, 81, 249, 0.2)',
        },
        white: {
          400: '#F3F7FD',
          500: '#FFFFFF',
          600: '#F3F4F8',
          DEFAULT: '#FFFFFF',
          content: '#F3F7FD',
          card: '#F3F4F8',
        },
        neutral: {
          // 字体颜色
          title: 'rgba(0, 0, 0, 0.87)',
          'sub-title': '#8D98A9',
          grey: 'rgba(141, 152, 169, 0.5)',
          black: 'rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
  plugins: [],
}
