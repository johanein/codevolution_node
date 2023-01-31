// 1) CommonJs
// const addImport = require("./add");
// console.log(addImport(2, 3));
// require("./batman");
// require("./superman");

// 2)caching
// const superhero = require("./superhero");

// console.log(superhero.getname());
// superhero.setname("Superman");
// console.log(superhero.getname());

// const newSuperhero = require("./superhero");
// console.log(newSuperhero.getname()); // here the name will be still superman because of caching

// 3) json
const data = require("./jsonFiles/data.json");

console.log({ address: data.address });
