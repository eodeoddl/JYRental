/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ["@svgr/webpack"],
    // });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;
