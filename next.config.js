/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'natureconservancy-h.assetsadobe.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  env: {
    TINYMCE_KEY: process.env.TINYMCE_KEY,
    MONGODB_URI: process.env.MONGODB_URI,
  }
}

module.exports = nextConfig
