/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const constants = {
	primary: '#A40D0D',
	'dark-primary': '#9C0D0F',
	white: '#F0E2E3',
	gray: '#9D9C9D',
	'dark-gray': '#5D5D5D',
	black: '#090909'
}

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			transparent: colors.transparent,
			...constants
		},
		extend: {
			fontSize: {
				'5xl': '3.45rem'
			},
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			}
		}
	},
	plugins: []
}
