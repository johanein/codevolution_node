const fs = require("fs");

// ############ write method below #############
fs.writeFileSync("./greet.txt", " Hello Albert", { flag: "a" });

fs.writeFile("./file.txt", " Hello async file write", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File content is written");
  }
});
