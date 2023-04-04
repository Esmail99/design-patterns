abstract class Animal {
  abstract name: string;
  abstract speak(): void;
}

class Dog extends Animal {
  name = "Dog";
  speak() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  name = "Cat";
  speak() {
    console.log("Meow!");
  }
}

class Cow extends Animal {
  name = "cow";
  speak() {
    console.log("Uhmmmmmw!");
  }
}

class AnimalFactory {
  createAnimal(animalType: string): Animal {
    switch (animalType) {
      case "dog":
        return new Dog();
      case "cat":
        return new Cat();
      case "cow":
        return new Cow();
      default:
        throw new Error("Invalid animal type");
    }
  }
}

const animalFactory = new AnimalFactory();

const dog = animalFactory.createAnimal("dog");
dog.speak(); // Output: Woof!

const cat = animalFactory.createAnimal("cat");
cat.speak(); // Output: Meow!

const cow = animalFactory.createAnimal("cow");
cow.speak(); // Output: Uhmmmmmw!
