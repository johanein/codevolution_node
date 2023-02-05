const http = require("http");

const fs = require("fs");

const data = require("../../jsonFiles/data.json");
const server = http.createServer((req, res) => {
  //   res.end(req.url);
  //   req.method GET, PUT, DELETE, POST
  switch (req.url) {
    case "/":
      res.writeHead(200, {
        "Content-Type": "text-plain",
      });
      res.end("This is home page");
      break;
    case "/about":
      res.writeHead(200, {
        "Content-Type": "text-plain",
      });
      res.end("About Page");
      break;
    case "/api":
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(data));
      break;
    case "/html":
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      fs.createReadStream("../creatingNodeServer/index.html").pipe(res);
      break;

    default:
      res.writeHead(400);
      res.end("page not found");
      break;
  }
});
server.listen(3000, () => {
  console.log("actively listening on server 3000");
});
