export {};

// Composition indicating a strong ownership relationship between the container and its parts.
// If the house is destroyed, the kitchen associated with it is also destroyed!
class Kitchen {
  constructor(private area: number) {}

  getArea() {
    return this.area;
  }
}

class House {
  private kitchen: Kitchen;

  constructor() {
    this.kitchen = new Kitchen(5);
  }

  print() {
    console.log(
      `This is a house contains a ${this.kitchen.getArea()} m^2 kitchen!`
    );
  }
}

const house = new House();

house.print();
