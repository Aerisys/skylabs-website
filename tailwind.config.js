/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ECF4FF',
          200: '#05A3F7',
          300: '#0488CF',
          400: '#0369A1',
          500: '#02527D',
          600: '#023754',
        },
        secondary: {
          100: '#D6F0FF',
          200: '#30B7FF',
          300: '#2693CD',
          400: '#035A89',
          500: '#12435E',
          600: '#122935',
        },
        tertiary: {
          100: '#E5F2F9',
          200: '#59C5FF',
          300: '#397EA2',
          400: '#032F89',
          500: '#038489',
        },
        accent: {
          100: '#EBF3FF',
          200: '#05BDEF',
          300: '#0556F7',
          400: '#0553EF',
        },
        info: {
          100: '#E0FCFF',
          200: '#05EFF7',
          300: '#05E7EF',
        },
        background: {
          DEFAULT: '#111111',
          light: '#272727',
          lighter: '#6C6C6C',
        },
        text: {
          DEFAULT: '#EAEAEA',
          light: '#F9F9F9',
          dark: '#272727',
        },
        border: '#272727',
        warning: {
          DEFAULT: '#F7A305',
        },
        validate: {
          DEFAULT: '#00B97B',
        },
      },
    },
  },
  plugins: [],
};

