const PizzaClass = require("./pizzaShop");

const pizzaInvoked = new PizzaClass();

pizzaInvoked.on("order", (size, topping) => {
  console.log(`ordered a ${size} pizza with ${topping} toppings`);
});

pizzaInvoked.order("large", "mushroom");
pizzaInvoked.order("large", "mushroom");
pizzaInvoked.order("large", "mushroom");
pizzaInvoked.displayOrderNumber();
