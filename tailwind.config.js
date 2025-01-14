/** @type {import('tailwindcss').Config} */
export default {
    purge: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#05A3F7',
                primary_light: '#05BDEF',
                primary_dark: '#035A89',
                secondary: '#2693CD',
                secondary_light: '#30B7FF',
                secondary_dark: '#12435E',
                tertiary: '#397EA2',
                tertiary_light: '#59C5FF',
                tertiary_dark: '#122935',
                accent: '#0556F7',
                accent_light: '#0553EF',
                accent_dark: '#032F89',
                info: '#05EFF7',
                info_light: '#05E7EF',
                info_dark: '#038489',
                background: '#111111',
                white: '#EAEAEA',
                white_light: '#F9F9F9',
                dark: '#272727',
                border_light: '#6C6C6C',
                warning: '#F7A305',
                validate: '#00b97b'
            }
        }
    },
    plugins: []
};

