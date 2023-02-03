const fs = require("fs");

console.log("first");
const data = fs.readFileSync("./file.txt");
console.log(data);
// console.log(data.toJSON());
console.log(data.toString());
fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    // console.log(data.toJSON()); // when passing the second argument as utf-8 this method causes error
    // console.log(data.toString());
  }
});
console.log("second");
