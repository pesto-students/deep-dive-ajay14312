const routeCheck = (path, item) => {
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

export default routeCheck;
