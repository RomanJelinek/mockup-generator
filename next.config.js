/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SECRET_KEY: process.env.SECRET_KEY,
    API_KEY: process.env.API_KEY,
    NAME_URL: process.env.NAME_URL,
    UPLOAD_SECRET_KEY: process.env.UPLOAD_SECRET_KEY,
    UPLOAD_API_KEY: process.env.UPLOAD_API_KEY,
    UPLOAD_NAME_URL: process.env.UPLOAD_NAME_URL,
  },
};

module.exports = nextConfig;
