/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,        // можно убрать, если не нужен
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,               // все *.svg
      issuer: /\.[jt]sx?$/,          // импорт из JS/TS/TSX
      use: ["@svgr/webpack"],        // превращает в React-компонент
    });
    return config;
  },
};