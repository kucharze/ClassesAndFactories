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
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight;
  }

  greet() {
    console.log(`${this.name} says hello`);
  }

  eat() {
    this.weight++;
    this.mood++;
  }

  exercise() {
    this.weight--;
  }

  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

let timmy = new Person("Timmy");
console.log(timmy);
for (let i = 0; i < 5; i++) {
  timmy.ageUp();
}
console.log(timmy);

for (let i = 0; i < 5; i++) {
  timmy.eat();
}
console.log(timmy);

for (let i = 0; i < 5; i++) {
  timmy.exercise();
}
console.log(timmy);

for (let i = 0; i < 9; i++) {
  timmy.ageUp();
}
console.log(timmy);

let Gus = new Hamster("Gus");
Gus.owner = "Timmy";

timmy.buyHamster(Gus);

console.log(timmy);

for (let i = 0; i < 15; i++) {
  timmy.ageUp();
}
console.log(timmy);

for (let i = 0; i < 2; i++) {
  timmy.eat();
}
console.log(timmy);

for (let i = 0; i < 2; i++) {
  timmy.exercise();
}
console.log(timmy);
