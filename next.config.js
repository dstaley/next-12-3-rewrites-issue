/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites() {
    return [
      {
        source: '/terms-of-service',
        destination: '/template-page/terms-of-service',
      }
    ]
  },
  redirects() {
    return [
      {
        source: '/template-page/terms-of-service',
        destination: '/terms-of-service',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
