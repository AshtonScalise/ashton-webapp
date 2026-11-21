/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // The old Godot build of Invictum lived at /game; send old links to the live game.
    return [
      {
        source: "/game/:path*",
        destination: "https://invictum-hollow-reach.fly.dev/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
