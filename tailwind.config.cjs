/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'orbitron': ['Orbitron']
			},
			screens: {
				'3xl': '2560px',
				// => @media (min-width: 640px) { ... }
			},
		},
	},
	plugins: [],
}
