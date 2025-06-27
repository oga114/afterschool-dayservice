/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/afterschool-dayservice',
  assetPrefix: '/afterschool-dayservice/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
