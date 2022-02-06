module.exports = {
	content: [
		// Example content paths...
		'./public/**/*.html',
		'./src/**/*.{js,jsx,ts,tsx,vue}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
	},

	plugins: [require('daisyui')],
};
