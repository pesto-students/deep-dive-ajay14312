function cacheFunction(cb) {
  if (typeof cb !== 'function') {
    throw new Error(`${cb} is not a function`);
  }
  const cacheArguments = {};
  return (...args) => {
    const isPropertyExist = Object.prototype.isPrototypeOf.call(cacheArguments, args);
    if (!isPropertyExist) {
      cacheArguments[args] = cb(args);
    }
    return cacheArguments[args];
  };
}

export {
  cacheFunction,
};
