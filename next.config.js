/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "keep-test-for-nextjs",
  images: {
    domains: ["images.prismic.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
};

module.exports = nextConfig;
