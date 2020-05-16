const Server = require("./lib/server.js");
const getData = require("./check/get-data.js");
const postData = require("./check/post-data.js");

const PORT = process.env.PORT || 4000;

const server = new Server();
server.listen(PORT);

server.addMiddleware([
  (req, res) => {
    req.requestTime = new Date();
    req.developer = "Ajay";
  },
]);
server.get("/check", getData);
server.get("/check/:id", getData);
server.post("/post-data", postData);
