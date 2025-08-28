// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com', 'images.unsplash.com'], // Add 'via.placeholder.com' here
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'via.placeholder.com',
         port: '',
        pathname: '/**',
       },
       {
         protocol: 'https',
         hostname: 'images.unsplash.com',
         port: '',
         pathname: '/**',
       },
     ],
  },
  // Other Next.js configurations go here
};

export default nextConfig;