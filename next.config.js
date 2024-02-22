// /** @type {import('next').NextConfig} */
// const nextConfig = {};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/juac/:path*",
        destination: "https://test-mard.artseb.studio/api/juac/:path*",
      },
    ];
  },
};
