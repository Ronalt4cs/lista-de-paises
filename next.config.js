/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // https://flagcdn.com/w320/kw.png
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
