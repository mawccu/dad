// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com'], // Add 'via.placeholder.com' here
    // Or, if using remotePatterns (recommended for more detailed control):
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'via.placeholder.com',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
  // Other Next.js configurations go here
};

export default nextConfig;