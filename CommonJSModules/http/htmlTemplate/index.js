const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const name = "Albert C Y";
  const html = fs.readFileSync("./index.html", "utf-8");
  const replacedHtml = html.replace("{{name}}", name);
  res.end(replacedHtml);
});

server.listen(3000, () => console.log("I am listening in 3000"));
