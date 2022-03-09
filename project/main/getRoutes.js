const dashboardRoutes = require("../dashboard/RoutesInfo");
const projectWithMUIRoutes = require("../project-with-MUI/RoutesInfo");
const projectWithSocketIo = require("../project-with-socket-io/RoutesInfo");
const SetRoute = () => {
  return [
    dashboardRoutes().routeInfo.routePath,
    projectWithMUIRoutes().routeInfo.routePath,
    projectWithSocketIo().routeInfo.routePath,
  ];
};

function getRoutes() {
  const Routes = SetRoute();
  let RoutePatterns = [];

  Routes.forEach((route) => {
    RoutePatterns.push({
      from: route,
      to: "pages/",
    });
  });
  return {
    patterns: RoutePatterns,
  };
}
function getRoutesWithProjectPath() {
  const Routes = SetRoute();
  let RoutePatterns = [];

  Routes.forEach((route) => {
    RoutePatterns.push({
      from: route,
      to: "pages/",
      ProjectPath
    });
  });
  return {
    patterns: RoutePatterns,
  };
}

module.exports = getRoutes;
