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
        hostname: 'github.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  env: {
    TINYMCE_KEY: process.env.TINYMCE_KEY,
    MONGODB_URI: process.env.MONGODB_URI,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_FRONT_PAGE_FORM: process.env.NEXT_PUBLIC_FRONT_PAGE_FORM,
  }
}

module.exports = nextConfig
