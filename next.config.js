/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "https://digital-marketplace-at3c.onrender.com",
			},
		],
	},
};

module.exports = nextConfig;
