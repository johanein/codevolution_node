// 1)
// const add = (a, b) => {
//   return a + b;
// };

// module.exports = add;
// 2)
// module.exports = (a, b) => {
//   return a + b;
// };
// 3)
// const subtracts = (a, b) => {
//   return a - b;
// };

// module.exports = {
//   add,
//   subtracts,
// };
// 4)
// module.exports.add = (a, b) => {
//   return a + b;
// };

// module.exports.subtracrs = (a, b) => {
//   return a - b;
// };
// 5) Not advisable to use it
exports.add = (a, b) => {
  return a + b;
};
