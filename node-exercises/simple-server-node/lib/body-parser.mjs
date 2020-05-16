const bodyParser = async (request, cb) => {
  let body = "";
  request.on("data", (chunk) => {
    body += chunk.toString();
  });
  request.on("end", () => {
    cb(body);
  });
};

export default bodyParser;
