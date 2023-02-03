import fs from "node:fs/promises"; // if you are using old node js files, require should be used instead of import
console.log("first");
// fs.readFile("./file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
//   using async await instead of promise
async function readFile() {
  // With the introduction of top-level await, you can now use the await keyword directly at the top level of your .mjs file, without having to wrap it inside an async function:
  try {
    const data = await fs.readFile("./file.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
readFile();
console.log("second");
