import http from "http";
import url from "url";
import bodyParser from "./body-parser.mjs";
import routeCheck from "./route-check.mjs";
import middleware from "./middleware.mjs";
class Server {
  routes = [];
  middlewareList = [];
  constructor() {
    this.server = http.createServer();
    this.server.on("request", this.parser);
  }

  listen(port) {
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
      response.write(`<h1>URL not found</h1>`);
      response.end();
    }
  };

  get = (route, cb) => {
    const routeObj = {
      route: route,
      method: "GET",
      cb,
    };
    this.routes.push(routeObj);
  };

  post = (route, cb) => {
    const routeObj = {
      route,
      method: "POST",
      cb,
    };
    this.routes.push(routeObj);
  };

  put = (route, cb) => {
    const routeObj = {
      path: route,
      method: "PUT",
      callback: cb,
    };
    this.routes.push(routeObj);
  };

  delete = (route, cb) => {
    const routeObj = {
      path: route,
      method: "DELETE",
      callback: cb,
    };
    this.routes.push(routeObj);
  };

  addMiddleware = (middlewares) => {
    this.middlewareList = [...middlewares];
  };
}

export default Server;
