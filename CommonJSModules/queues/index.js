const fs = require("fs");

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log(data);
});

process.nextTick(() => console.log("nextTicked"));

Promise.resolve("promise resolved").then((data) => console.log(data));

setImmediate(() => {
  console.log("setImmediate called");
});
setTimeout(() => {
  console.log("setTimeout");
}, 0);
