// Javascript doesn't have interface so lets implementing using class & prototype
class Entity {
  constructor(name) {
    this.name = name;
  }
}

// consider as interface
const flyer = {
  fly() {
    console.log(`${this.constructor.name} can fly`);
  }
}

const swimmer = {
  swim() {
    console.log(`${this.constructor.name} can swim`)
  }
}

const walker = {
  walk() {
    console.log(`${this.constructor.name} can walk`)
  }
}

// client code
class Bird extends Entity { };
Object.assign(Bird.prototype, flyer);

class Fish extends Entity { };
Object.assign(Fish.prototype, swimmer);

class Tortoise extends Entity { };
Object.assign(Tortoise.prototype, swimmer);
Object.assign(Tortoise.prototype, walker);

const dog = new Bird();
dog.fly();

const fish = new Fish();
fish.swim();

const tortoise = new Tortoise();
tortoise.swim();
tortoise.walk();

/** Sample output

Bird can fly
Fish can swim
Tortoise can swim
Tortoise can walk

*/