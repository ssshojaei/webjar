/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '0.5rem',
				lg: '1rem',
				xl: '2rem',
				'2xl': '2.5rem',
			},
		},
		extend: {},
	},
	plugins: [],
}
