/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app-media.fitbod.me",
        port: "",
  
      },
    ],
  },
};

export default nextConfig;
