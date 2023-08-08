/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader : "custom",
    unoptimized: true,
  },
  env: {
    api : "https://murapay.id/api/",
    api_external : "https://external.murapay.id:6585/api/external/",
    google_analytics: "G-1W5177LWKC"
  }
}

module.exports = nextConfig
