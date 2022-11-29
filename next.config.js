/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    api : "http://localhost:3000/api/",
    api_external : "http://192.168.5.12:8085/api/external/",
  }
}

module.exports = nextConfig
