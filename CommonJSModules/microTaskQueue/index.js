// Promise.resolve("promise is resolved").then((message) => {
//   console.log(message);
// });
// // process.nextTick has more precedence over promise
// process.nextTick(() => {
//   console.log("nextTick task");
// });

process.nextTick(() => {
  console.log("nextTick task1");
});
process.nextTick(() => {
  console.log("nextTick task2");

  process.nextTick(() => {
    console.log("nextTick inside task2");
  });
});
process.nextTick(() => {
  console.log("nextTick task3");
});

Promise.resolve("promise resolved 1").then((message) => {
  console.log(message);
});
Promise.resolve("promise resolved 2").then((message) => {
  console.log(message);
  process.nextTick(() => {
    console.log("nextTick inside promise resolved 2");
  });
});
Promise.resolve("promise resolved 3").then((message) => {
  console.log(message);
});
