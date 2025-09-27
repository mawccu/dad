// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com', 'images.unsplash.com'],
    remotePatterns: [
      { protocol: 'https', hostname: 'via.placeholder.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', port: '', pathname: '/**' },
    ],
  },

  async redirects() {
    return [
      // Optional: send apex root directly to canonical language URL
      {
        source: '/',
        has: [{ type: 'host', value: 'newlookjo.com' }],
        destination: 'https://www.newlookjo.com/en',
        permanent: true, // 308
      },
    ];
  },
};

export default nextConfig;
