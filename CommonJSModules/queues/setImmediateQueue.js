setImmediate(() => console.log("Immediate 1"));
setImmediate(() => {
  console.log("Immediate 2");
  process.nextTick(() => {
    console.log("nextTick inside setImmediate");
  });
  Promise.resolve().then(() => {
    console.log("promise inside setImmediate");
  });
});
setImmediate(() => console.log("Immediate 3"));
