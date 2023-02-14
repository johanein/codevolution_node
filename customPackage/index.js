const { upperCase } = require("upper-case");
function greet(name) {
  console.log(
    upperCase(
      `Hello ${name}, this is a package just for greeting in upper case`
    )
  );
}
// greet("Albert");
module.exports = greet;
