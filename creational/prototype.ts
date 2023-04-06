interface Prototype {
  clone: () => Prototype;
}

class Vehicle implements Prototype {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  clone() {
    return new Vehicle(this.make, this.model, this.year);
  }

  describe() {
    console.log(`This is a ${this.make} ${this.model} ${this.year}`);
  }
}

const vehicle = new Vehicle("Mercedes-Benz", "C180", 2022);

const clonedVehicle = vehicle.clone();
clonedVehicle.year = 2010; // we did not worry about pass all configurations options

vehicle.describe();
clonedVehicle.describe();
