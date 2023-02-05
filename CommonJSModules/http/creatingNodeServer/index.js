const http = require("http");
const data = require("../../jsonFiles/data.json");

// text Response
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello vishwas");
// });

// json response
// const server = http.createServer((req, res) => {
//   console.log({ req });
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(data));
// });
// server.listen(3000, () => console.log("server is listening on port 3000"));

// html Response
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("<h1>Hello world</h1>");
// });

// server.listen(3000, () => console.log("listening on 3000"));

// sending a html file
// const fs = require("fs");
// const htmlData = fs.readFileSync("./index.html", "utf-8");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(htmlData);
// });

// server.listen(3000, () => console.log("listening on 3000"));

// sending a html file using streams.
// This is the most preferable way to send html pages
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(__dirname + "/index.html").pipe(res);
});

server.listen(3000, () => console.log("listening on 3000"));
