const EventEmitter = require("events");

const events = new EventEmitter();

events.on("order_pizza", (size, type) => {
  console.log(`A ${type} pizza of ${size} is ordered`);
});
events.on("order_pizza", (size) => {
  if (size === "large") {
    console.log("ordered pizza is large");
  } else {
    console.log("ordered pizza is not large");
  }
});

console.log("to show non blocking behaviour");
events.emit("order_pizza", "large", "mushroom");
