export {};

// Inheritance is a mechanism that allows a class to inherit properties
// and methods from another class.
class Car {
  private make: string;
  private model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log(`Starting ${this.make} ${this.model}!`);
  }

  stop() {
    console.log(`Stopping ${this.make} ${this.model}!`);
  }
}

class Mercedes extends Car {
  constructor(model: string) {
    super("Mercedes", model);
  }
}

const mercedes = new Mercedes("C180");

mercedes.start();
mercedes.stop();
