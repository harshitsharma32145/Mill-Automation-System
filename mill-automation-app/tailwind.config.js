/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                olive: {
                    dark: '#2C3E2D',
                    medium: '#4A6741',
                    light: '#8BA888',
                    pale: '#D4E5D2',
                },
                gold: {
                    DEFAULT: '#C9A961',
                    light: '#E5D19E',
                },
                cream: '#F7F4ED',
                accent: {
                    red: '#C85A54',
                    blue: '#5B8C9F',
                }
            },
            fontFamily: {
                sans: ['Public Sans', 'sans-serif'],
                serif: ['DM Serif Display', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in',
                'fade-in-up': 'fadeInUp 0.6s ease',
                'slide-up': 'slideUp 0.3s ease',
                'pulse-soft': 'pulseSoft 2s infinite',
                'shake': 'shake 0.4s ease',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '25%': { transform: 'translateX(-8px)' },
                    '75%': { transform: 'translateX(8px)' },
                },
            },
        },
    },
    plugins: [],
}
