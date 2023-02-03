const fs = require("node:fs");

const readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 2, // This is to make the chunks of data that is transfered to be in bytes of 2 instead of 64 which is the default
});
const writableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk.toString());
  writableStream.write(chunk);
});
