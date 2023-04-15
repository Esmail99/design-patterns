// Subsystem 1
class CPU {
  freeze(): void {
    console.log("Freezing CPU...");
  }

  jump(): void {
    console.log(`Jumping to address...`);
  }

  execute(): void {
    console.log("Executing CPU instructions...");
  }
}

// Subsystem 2
class Memory {
  load(): void {
    console.log(`Loading data at address...`);
  }
}

// Subsystem 3
class HardDrive {
  read(): void {
    console.log(`Reading data from hard drive...`);
  }
}

class ComputerFacade {
  private cpu;
  private memory;
  private hardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start(): void {
    this.cpu.freeze();
    this.hardDrive.read();
    this.memory.load();
    this.cpu.jump();
    this.cpu.execute();
  }
}

// Client
const computer = new ComputerFacade();
computer.start();
