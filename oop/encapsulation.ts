export {};

// Encapsulation is the concept of bundling data (variables)
// and the methods that operate on that data within a single unit (class).
// It helps in hiding the internal implementation details
// and exposing a well-defined interface to interact with the object.
class Car {
  private color: string = "black";
  private speed: number = 0;

  constructor(private make: string, private model: string) {}

  print() {
    console.log(
      `I am a ${this.make} ${this.model} ${this.color}, my speed is ${this.speed}!`
    );
  }

  paint(color: string) {
    this.color = color;
  }

  accelerate(increment: number) {
    if (increment <= 0) {
      throw new Error("Increment must be a positive value!");
    }

    this.speed += increment;
  }

  brake(decrement: number) {
    if (decrement <= 0) {
      throw new Error("Decrement must be a positive value!");
    }

    if (decrement > this.speed) {
      throw new Error("Decrement exceeds current speed!");
    }

    this.speed -= decrement;
  }
}

const car = new Car("Mercedes", "C180");

car.paint("blue");
car.accelerate(20);
car.accelerate(10);
car.brake(1);

car.print();
