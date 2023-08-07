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
  }
  
}

module.exports = nextConfig
