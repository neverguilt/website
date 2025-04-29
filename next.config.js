const config = require("./src/config/config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: config.base_path !== "/" ? config.base_path : "",
  trailingSlash: config.site.trailing_slash,
  // output: 'standalone',
  images: { // <-- Add this images configuration block
    domains: ['cdn.neverguilt.com'], // <-- Add the hostname here
  },
};

module.exports = nextConfig;
