class Superhero {
  constructor(name) {
    this.name = name;
  }

  getname = () => {
    return this.name;
  };
  setname = (name) => {
    this.name = name;
  };
}

module.exports = new Superhero("Batman"); // instead if we export only the class we can get different instance in multiple require.
