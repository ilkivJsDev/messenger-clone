/** @type {import('next').NextConfig} */
const nextConfig = {
	disableExperimentalFeaturesWarning: true,

	images: {
		domains: [
			'res.cloundinary.com',
			'avatars.githubusercontent.com',
			'lh3.googleusercontent.com',
		],
	},
}

module.exports = nextConfig
