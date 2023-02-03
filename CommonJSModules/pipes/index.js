const fs = require("fs");

// the below two line given here are for example of chaining in pipes. What it does is compressing
const zlib = require("zlib");
const gzip = new zlib.createGzip();

const readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writableStream = fs.createWriteStream("./file2.txt");

readableStream.pipe(writableStream);

// ####chaining example below####

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));
