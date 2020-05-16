import http from "http";
import url from "url";
import bodyParser from "./body-parser.mjs";
import routeCheck from "./route-check.mjs";

const routes = [];
class Server {
  constructor() {
    this.server = http.createServer();
    this.server.on("request", this.parser);
  }

  listen(port) {
    this.server.listen(port);
    console.log(`listening on port ${port}`);
  }

  parser = async (request, response) => {
    const parsedURL = url.parse(request.url, true);
    let isRouteExist = false;
    for (let item of routes) {
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
          await item.cb(request, response);
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
    routes.push(routeObj);
  };

  post = (route, cb) => {
    const routeObj = {
      route,
      method: "POST",
      cb,
    };
    routes.push(routeObj);
  };

  put = (route, cb) => {
    const routeObj = {
      path: route,
      method: "PUT",
      callback: cb,
    };
    routes.push(routeObj);
  };

  delete = (route, cb) => {
    const routeObj = {
      path: route,
      method: "DELETE",
      callback: cb,
    };
    routes.push(routeObj);
  };
}

export default Server;
