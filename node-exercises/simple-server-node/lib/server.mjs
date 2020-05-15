import http from "http";

export default class Server {
  constructor() {
    this.server = http.createServer();
    this.server.on("request", this.parser);
  }

  listen(port) {
    this.server.listen(port);
    console.log(`listening on port ${port}`);
  }

  parser = (request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(request.url);
    response.end();
  };
}
