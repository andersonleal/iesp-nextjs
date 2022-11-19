/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
        'raw.githubusercontent.com'
    ]
  },
  async redirects() {
    return [
      {
        source: '/static',
        destination: '/ssg',
        permanent: false
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/static2',
        destination: '/ssg'
      }
    ]
  }
}

module.exports = nextConfig
