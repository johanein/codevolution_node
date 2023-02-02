const buffer = new Buffer.from("Vishwas", "utf-8"); // the second argument is optional. the dafault value is given here
console.log(buffer.write("Codevolution"));
console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());
