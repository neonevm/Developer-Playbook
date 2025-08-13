/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'github.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig 