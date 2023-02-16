const http = require("http");
const { Worker } = require("worker_threads");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Fast page");
  } else if (req.url === "/slow-page") {
    const worker = new Worker("./worker_thread.js");
    worker.on("message", (j) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Slow page ${j}`);
    });
  }
});

server.listen(3000, () => {
  console.log("server listening on 3000");
});
