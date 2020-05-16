import Server from "./lib/server.mjs";
import getData from "./check/get-data.mjs";
import postData from "./check/post-data.mjs";

const PORT = process.env.PORT || 4000;

const server = new Server();
server.listen(PORT);

server.addMiddleware([
  (req, res) => {
    req.requestTime = new Date();
  },
]);
server.get("/check", getData);
server.get("/check/:id", getData);
server.post("/post-data", postData);
