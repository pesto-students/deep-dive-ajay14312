const checkMiddlewareType = (middlewares) => {
  if (middlewares.length < 1) {
    throw new Error("middlewares should not be empty");
  }
  for (let item of middlewares) {
    if (typeof item !== "function") {
      throw new TypeError(`Expected a function, got ${typeof middlewares}`);
    }
  }
};

module.exports = checkMiddlewareType;
