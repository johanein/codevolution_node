// const path = require("node:path");
const path = require("path"); // works the same as above

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));
console.log(path.format(path.parse(__dirname)));

console.log(path.isAbsolute(__filename));

console.log(path.join("users", "starts", "index.html"));
console.log(path.join("users", "//starts", "index.html")); // also normalises the path

console.log(path.join(__dirname, "index.js"));

console.log(path.resolve("users", "//starts", "../index.html")); // also normalises the path
