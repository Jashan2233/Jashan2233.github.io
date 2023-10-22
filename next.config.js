/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other configurations...

  // Add the export configuration
  export: {
    output: "static", // Use 'static' for static HTML export
  },
};

module.exports = nextConfig;
