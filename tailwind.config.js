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
                primary: '#0369A1',
                secondary: '#6A9FBE',
                tertiary: '#D1D5DB',
                accent: '#F9A826',
                dark: '#1F2937',
                light: '#F5F7FA',
                white: '#FFFFFF',
                info: '#2094F3',
                success: '#009485',
                warning: '#ff0000'
            }
        }
    },
    plugins: []
};

