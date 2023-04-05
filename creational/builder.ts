class Car {
  seats?: number;
  engine?: string;
  gpsEnabled?: boolean;

  describe = () => {
    console.log(
      `Create a car with ${this.seats} seats, a ${this.engine} engine, and ${
        this.gpsEnabled ? "GPS enabled" : "GPS disabled"
      }.`
    );
  };
}

class CarBuilder {
  car: Car;

  constructor() {
    this.car = new Car();
  }

  setSeats = (seats: number) => {
    this.car.seats = seats;
  };

  setEngine = (engine: string) => {
    this.car.engine = engine;
  };

  setGps = (enabled: boolean) => {
    this.car.gpsEnabled = enabled;
  };

  reset = () => {
    this.car = new Car();
  };

  getCar = () => {
    return this.car;
  };
}

class CarDirector {
  carBuilder;

  constructor(carBuilder: CarBuilder) {
    this.carBuilder = carBuilder;
  }

  createSportCar = () => {
    this.carBuilder.reset();
    this.carBuilder.setSeats(2);
    this.carBuilder.setEngine("sport");
    this.carBuilder.setGps(true);
  };

  createFamilyCar = () => {
    this.carBuilder.reset();
    this.carBuilder.setSeats(4);
    this.carBuilder.setEngine("SUV");
    this.carBuilder.setGps(false);
  };
}

const carBuilder = new CarBuilder();

const carDirector = new CarDirector(carBuilder);

carDirector.createSportCar();

const sportCar = carBuilder.getCar().describe();

carDirector.createFamilyCar();

const familyCar = carBuilder.getCar().describe();
