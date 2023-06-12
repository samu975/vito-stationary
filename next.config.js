/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: "http://localhost:3001",
  },
  async rewrites() {
    {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:3001/api/:path*",
        },
      ];
    }
  },
};

module.exports = nextConfig;
