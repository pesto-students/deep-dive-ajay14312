const checkRouteAndCallbackType = (route, cb) => {
  if (typeof route !== "string") {
    throw new TypeError(`Expected a string, got ${typeof route}`);
  } else if (typeof cb !== "function") {
    throw new TypeError(`Expected a function, got ${typeof cb}`);
  }
};

module.exports = checkRouteAndCallbackType;
