/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  // Add CSP headers so the X/Twitter list embed can load
  async headers() {
    const csp = [
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://platform.twitter.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://cdn.syndication.twimg.com https://abs.twimg.com https://pbs.twimg.com",
      "frame-src https://platform.twitter.com https://twitter.com https://syndication.twitter.com",
      "connect-src 'self' https://cdn.syndication.twimg.com https://api.twitter.com",
      "font-src 'self' data: https://abs.twimg.com",
    ].join('; ');
  
    return [
      {
        source: "/(.*)",
        headers: [{ key: "Content-Security-Policy", value: csp }],
      },
    ];
  },
  

  // Keep your existing image settings and add Twitter domains
  images: {
    domains: [
      'images.unsplash.com',
      'github.com',
      // add Twitter image/CDN domains for any <Image> usage inside your UI
      'cdn.syndication.twimg.com',
      'abs.twimg.com',
      'pbs.twimg.com',
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
