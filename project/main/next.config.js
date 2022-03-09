/**
 * [TODO] :
 * 1.optimize the project by not runing remove-files-webpack-plugin when not needed
 *
 */
/** @type {import('next').NextConfig} */

/**
 * getRoutes -> a function that get routes from other projects
 * getDirectories -> a function that get subdirectories of the path given
 * routesPaths -> the path copy-webpack-plugin will copy to main project
 * currentRoutes -> the current routes including default routes (this is because to optimize the projects and not deleting the default routes)
 */

const path = require("path");
const fs = require("fs");
const glob = require("glob");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const RemovePlugin = require("remove-files-webpack-plugin");
const getRoutes = require("./getRoutes");

/**
 * this function is used to get the subdirectories  of the path given
 */
function getDirectories(pathFrom) {
  return fs.readdirSync(pathFrom).filter(function (file) {
    return fs.statSync(pathFrom + "/" + file).isDirectory();
  });
}
/**
 * this function is used to check if there are duplicate routes
 *
 */

// TODO : complate this function

function checkRoutesDuplications(routes) {
  let allRouteFiles = [];
  routes.forEach((route) => {
    const gl = glob.sync(route.from + "/**/*");

    gl.forEach(function (paths) {
      let routeOnly = paths.replace(route.from, "");
      if (routeOnly !== "/api" && routeOnly !== "api") {
        if (fs.statSync(path.join(__dirname, route.from, routeOnly)).isFile()) {
          allRouteFiles.push(routeOnly);
        }
      }
    });
  });

  console.log(allRouteFiles);

  let duplicatedRoutes = [];
  duplicatedRoutes = allRouteFiles.filter((route, index) => {
    return allRouteFiles.indexOf(route) !== index;
  });
  if (duplicatedRoutes.length > 0) {
    console.error("duplicated routes found !!!!!! : ");
    console.warn(duplicatedRoutes);
    process.exit(1);
    return false;
  } else {
    return true;
  }
}

// this will be used to get the regestered routes from getRoutes.js
const routes = getRoutes().patterns;

// here we will convert the routes to the correct format
// and then we will create a list of current routes to not being deleted
let routesPaths = [];
let currentRoutes = [];
// we want to have all subfolders of the routes folder so detect if there are duplications!
let AllSubFolders = [];
routes.forEach((route) => {
  const subfolders = getDirectories(path.join(__dirname, route.from));
  if (Object.keys(subfolders).length !== 0) {
    routesPaths.push({
      from: path.join(__dirname, route.from),
      to: path.join(__dirname, route.to),
    });

    subfolders.forEach((subfolder) => {
      AllSubFolders.push(subfolder);
      currentRoutes.push(path.join(__dirname, route.to, subfolder));
    });
  } else {
    console.log("please define some routes!!!!");
  }
});
// next js default routes.
currentRoutes.push(path.join(__dirname, "pages/index.js"));
currentRoutes.push(path.join(__dirname, "pages/_app.js"));
currentRoutes.push(path.join(__dirname, "pages/_document.js"));

// check if there are duplications routes
if(! checkRoutesDuplications(routes)){
  process.exit(1);
}

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new RemovePlugin({
        watch: {
          // here we will remove any thing from pages folder expect the current routes that we have defined
          test: [
            {
              folder: path.join(__dirname, "pages"),
              method: () => true,
            },
          ],
          exclude: currentRoutes,
          // logWarning:false,
        },
      })
    );
    if (Object.keys(routesPaths).length !== 0) {
      // first we will check if there are some defined routes
      config.plugins.push(
        new CopyWebpackPlugin({
          // here we will copy the routes that we have defined and converted to the correct pattern
          patterns: routesPaths,
        })
      );
    }
    // this line take 5 hours of my time 🤦‍♂️
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: "babel-loader",
      options: { presets: ["next/babel"] },
    });
    return config;
  },
};

module.exports = nextConfig;
