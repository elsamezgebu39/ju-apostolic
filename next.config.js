// /** @type {import('next').NextConfig} */
// const nextConfig = {};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/juac/:path*",
        destination: "http://localhost:8000/api/juac/:path*",
      },
    ];
  },
};
