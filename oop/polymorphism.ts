export {};

// Polymorphism allows objects of different classes to be treated as objects of a common superclass.
// It enables the implementation of generic code that can work with objects of various types.
class Animal {
  constructor(private name: string) {}

  speak(): void {
    console.log(
      `I am a ${this.name} and this is a generic implementation of speak method!`
    );
  }
}

class Dog extends Animal {
  constructor() {
    super("Dog");
  }

  speak(): void {
    console.log("Whoofff!!!");
  }
}

class Cat extends Animal {
  constructor() {
    super("Cat");
  }

  speak(): void {
    console.log("Meowww!!!");
  }
}

const animal1: Animal = new Dog();
const animal2: Animal = new Cat();

animal1.speak();
animal2.speak();
