/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other configurations...
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = nextConfig;
