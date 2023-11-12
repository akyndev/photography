/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				pathname: "/**",
				port: "",
			},
			{
				protocol: "https",
				hostname: "plus.unsplash.com",
				pathname: "/**",
				port: "",
			},
			{
				protocol: "http",
				hostname: "wedding-retouching.com",
				pathname: "/**",
				port: "",
			},
		],
	},
}

module.exports = nextConfig
