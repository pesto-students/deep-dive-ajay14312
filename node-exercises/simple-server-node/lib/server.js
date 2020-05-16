const http = require("http");
const url = require("url");
const bodyParser = require("./body-parser.js");
const routeCheck = require("./route-check.js");
const middleware = require("./middleware.js");
const checkRouteAndCallbackType = require("../utils/check-route-callback-type");
const checkMiddlewareType = require("../utils/check-middleware-type");

class Server {
  routes = [];
  middlewareList = [];
  constructor() {
    this.server = http.createServer();
    this.server.on("request", this.parser);
  }

  listen(port) {
    if (port < 0 || port > 65535) {
      throw new RangeError(`Port range should be between 0-65535, got ${port}`);
    }
    this.server.listen(port);
    console.log(`listening on port ${port}`);
  }

  parser = async (request, response) => {
    await middleware(request, response, this.middlewareList);
    const parsedURL = url.parse(request.url, true);
    let isRouteExist = false;
    for (let item of this.routes) {
      const routeCheckData = routeCheck(parsedURL.pathname, item);
      if (routeCheckData.isCorrectRoute && request.method === item.method) {
        isRouteExist = true;
        request.queryParams = JSON.stringify(parsedURL.query);
        request.params = routeCheckData.params;
        if (request.method !== "GET") {
          bodyParser(request, (result) => {
            request.body = result;
            item.cb(request, response);
          });
        } else {
          item.cb(request, response);
        }
      }
    }

    if (!isRouteExist) {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write(`<div style="display: flex;flex-direction: column;align-items: center;">
      <h1 style="font-size: 65px;">404!</h1>
      <p style="font-size: 30px;">URL not found</p>
      </div>`);
      response.end();
    }
  };

  get = (route, cb) => {
    checkRouteAndCallbackType(route, cb);
    const routeObj = {
      route: route,
      method: "GET",
      cb,
    };
    this.routes.push(routeObj);
  };

  post = (route, cb) => {
    checkRouteAndCallbackType(route, cb);
    const routeObj = {
      route,
      method: "POST",
      cb,
    };
    this.routes.push(routeObj);
  };

  put = (route, cb) => {
    checkRouteAndCallbackType(route, cb);
    const routeObj = {
      path: route,
      method: "PUT",
      callback: cb,
    };
    this.routes.push(routeObj);
  };

  delete = (route, cb) => {
    checkRouteAndCallbackType(route, cb);
    const routeObj = {
      path: route,
      method: "DELETE",
      callback: cb,
    };
    this.routes.push(routeObj);
  };

  addMiddleware = (middlewares) => {
    checkMiddlewareType(middlewares);
    this.middlewareList = [...middlewares];
  };
}

module.exports = Server;
