/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SOURCE_CODE_URL: process.env.SOURCE_CODE_URL,
    SITE_URL: process.env.SITE_URL,
    AUTHOR: process.env.AUTHOR
  }
}

module.exports = nextConfig
