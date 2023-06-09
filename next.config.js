/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["source.unsplash.com", "images.unsplash.com", "images.ctfassets.net"]
  }
}

module.exports = nextConfig
