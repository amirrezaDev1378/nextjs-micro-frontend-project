/** @type {import('next').NextConfig} */

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const RemovePlugin = require("remove-files-webpack-plugin");
const getRoutes = require("./getRoutes");

const routes = getRoutes().patterns;

let routesPaths = [];
let currentRoutes = [];
routes.forEach((route) => {
  routesPaths.push({
    from: path.join(__dirname, route.from),
    to: path.join(__dirname, route.to),
  });
  currentRoutes.push(path.join(__dirname, route.to));
});

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new RemovePlugin({
        watch: {
          test: [
            {
              folder: path.join(__dirname, "pages"),
              method: () => true,
            },
          ],
          exclude: currentRoutes,
        },
     
      }),
      new CopyWebpackPlugin({
        patterns: routesPaths,
      })
    );
    return config;
  },
};

module.exports = nextConfig;
