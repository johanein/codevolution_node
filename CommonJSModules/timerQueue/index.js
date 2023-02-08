setTimeout(() => console.log("timer1"), 0);
setTimeout(() => {
  console.log("timer2");
  Promise.resolve("promise resolved inside timer 2").then((msg) =>
    console.log(msg)
  );
  process.nextTick(() => {
    console.log("nextTick inside of second timer");
  });
}, 0);
setTimeout(() => console.log("timer3"), 0);

// Timer callbacks are executed in fifo order. The first with least time is executed first.
