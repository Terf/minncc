/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // for now, while using GH pages
  output: "export",
  images: {
    unoptimized: true,
  },
  // probably want standalone mode when we host with DB
};

module.exports = nextConfig;
