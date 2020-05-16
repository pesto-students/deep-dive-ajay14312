const middleware = async (request, response, list) => {
  try {
    for (let func of list) {
      await func(request, response);
    }
    return { request, response };
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export default middleware;
