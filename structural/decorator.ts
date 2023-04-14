interface Pizza {
  getDescription(): string;

  getCost(): number;
}

class Margherita implements Pizza {
  getDescription(): string {
    return "This is a Margherita pizza";
  }

  getCost(): number {
    return 70;
  }
}

abstract class ToppingDecorator implements Pizza {
  protected pizza: Pizza;

  constructor(pizza: Pizza) {
    this.pizza = pizza;
  }

  abstract getDescription(): string;

  abstract getCost(): number;
}

class Cheese extends ToppingDecorator {
  getDescription(): string {
    return `${this.pizza.getDescription()}, extra cheese`;
  }

  getCost(): number {
    return this.pizza.getCost() + 20;
  }
}

class Sauce extends ToppingDecorator {
  getDescription(): string {
    return `${this.pizza.getDescription()}, extra sauce`;
  }

  getCost(): number {
    return this.pizza.getCost() + 5;
  }
}

const pizza: Pizza = new Margherita();
console.log(`${pizza.getDescription()} that costs ${pizza.getCost()} EGP`);

const pizzaWithCheese: Pizza = new Cheese(pizza);
console.log(
  `${pizzaWithCheese.getDescription()} that costs ${pizzaWithCheese.getCost()} EGP`
);

const pizzaWithSauce: Pizza = new Sauce(pizza);
console.log(
  `${pizzaWithSauce.getDescription()} that costs ${pizzaWithSauce.getCost()} EGP`
);

const pizzaWithCheeseAndSauce: Pizza = new Cheese(new Sauce(pizza));
console.log(
  `${pizzaWithCheeseAndSauce.getDescription()} that costs ${pizzaWithCheeseAndSauce.getCost()} EGP`
);
