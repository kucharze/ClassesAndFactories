class Hamster {
  constructor(owner, name, price) {
    this.owner = owner;
    this.name = name;
    this.price = price;
  }

  wheelRun() {
    console.log("Squeak Squeak");
  }

  eatFood() {
    console.log("Nibble Nibble");
  }

  getPrice() {
    return this.price;
  }
}
