/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['assets.joindigitalland.com'],
    },
    eslint: {
        ignoreDuringBuilds: true, 
      },
  };
  
  export default nextConfig;
  