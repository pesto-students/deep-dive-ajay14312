const routeCheck = (path, item) => {
  if (typeof path !== "string") {
    throw new TypeError(`Expected a string, got ${typeof path}`);
  } else if (typeof item !== "object") {
    throw new TypeError(`Expected an Object, got ${typeof path}`);
  } else if (typeof item.route !== "string") {
    throw new TypeError(`Expected a string, got ${typeof path}`);
  }

  const splittedPath = path.split("/");
  splittedPath.splice(0, 1);
  const pathFirstRoute = splittedPath.splice(0, 1);

  const splitRoute = item.route.split("/:");
  const itemFirstRoute = splitRoute.splice(0, 1);

  if (
    splitRoute.length === splittedPath.length &&
    itemFirstRoute[0].includes(pathFirstRoute[0])
  ) {
    const routeMathData = { isCorrectRoute: true, params: {} };
    for (let [id, key] of splitRoute.entries()) {
      routeMathData.params[key] = splittedPath[id];
    }
    return routeMathData;
  } else {
    return { isCorrectRoute: false, params: {} };
  }
};

module.exports = routeCheck;
