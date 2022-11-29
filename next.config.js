/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
<<<<<<< HEAD
    api : "https://landingpage-next-eight.vercel.app/api/",
=======
    api : "http://localhost:3000/api/",
>>>>>>> 79cffeb9502b0544aa18adfc6f9cbebc49a4c223
    api_external : "https://external.murapay.id:6585/api/external/",
  }
}

module.exports = nextConfig
