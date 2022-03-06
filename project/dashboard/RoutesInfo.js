/**
 * please pay attention :
 * the "routePath" never should end with `/` . if you do that it will confuse the duplications checker and your code can be permanently deleted!
 */

function RouteInfo() {
  return {
    routeInfo: {
      routePath: "../dashboard/routes",
      options: {},
    },
  };
}
module.exports = RouteInfo;
