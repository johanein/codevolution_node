const EventEmitter = require("events");

class Pizza extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber++;
    this.emit("order", size, topping);
  }

  displayOrderNumber() {
    console.log("total order number is : " + this.orderNumber);
  }
}

module.exports = Pizza;
