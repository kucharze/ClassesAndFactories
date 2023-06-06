class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
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

class Person {
  constructor(name, age, height, weight, mood, hamsters, bankAccount) {}
}
