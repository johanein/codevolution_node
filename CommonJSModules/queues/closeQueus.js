const fs = require("fs");

const readStream = fs.ReadStream(__filename);

readStream.close();

readStream.on("close", () => {
  console.log("This is readstream close event callback");
});

process.nextTick(() => console.log("nextTick callback"));

Promise.resolve("promise callback").then((data) => console.log(data));

setImmediate(() => console.log("setImmediate callback"));

setTimeout(() => console.log("settimeout callback"), 0);
