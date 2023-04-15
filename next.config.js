/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // This is the property you need to add
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    // Remove those lines if not using cdn
    // loader: "cloudinary",
    // path: "https://res.cloudinary.com/xxxxxxxxxxxxx",
  },
};

module.exports = nextConfig;
