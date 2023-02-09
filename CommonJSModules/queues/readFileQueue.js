const fs = require("fs");

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log(data);
  setImmediate(() => {
    console.log("Inner setImmediate inside readfile");
  });
  process.nextTick(() => console.log("inner nextTicked"));

  Promise.resolve("inner promise resolved").then((data) => console.log(data));
});
