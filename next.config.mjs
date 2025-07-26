/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // If deploying to a subdirectory (like username.github.io/repo-name)
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
}

export default nextConfig
