const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Fast page");
  } else if (req.url === "/slow-page") {
    for (let i = 0; i < 6000000000; i++) {}
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Slow page");
  }
});

server.listen(3000, () => {
  console.log("server listening on 3000");
});
