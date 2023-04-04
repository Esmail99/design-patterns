interface Button {
  render: () => void;
}

class WindowsButton implements Button {
  render = () => {
    console.log("Rendering a Windows button...");
  };
}

class MacButton implements Button {
  render = () => {
    console.log("Rendering a Mac button...");
  };
}

class LinuxButton implements Button {
  render = () => {
    console.log("Rendering a Linux button...");
  };
}

interface CheckBox {
  render: () => void;
}

class WindowsCheckBox implements CheckBox {
  render = () => {
    console.log("Rendering a Windows check box...");
  };
}

class MacCheckBox implements CheckBox {
  render = () => {
    console.log("Rendering a Mac check box...");
  };
}

class LinuxCheckBox implements CheckBox {
  render = () => {
    console.log("Rendering a Linux check box...");
  };
}

// Abstract Factory
interface GUIFactory {
  createButton(): Button;
  createCheckBox(): CheckBox;
}

class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckBox(): CheckBox {
    return new WindowsCheckBox();
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckBox(): CheckBox {
    return new MacCheckBox();
  }
}

class LinuxFactory implements GUIFactory {
  createButton(): Button {
    return new LinuxButton();
  }

  createCheckBox(): CheckBox {
    return new LinuxCheckBox();
  }
}

class Application {
  factory: GUIFactory;

  constructor(factory: GUIFactory) {
    this.factory = factory;
  }

  render = () => {
    const button = this.factory.createButton();
    const checkbox = this.factory.createCheckBox();

    button.render();
    checkbox.render();
  };
}

const macApplication = new Application(new MacFactory());

macApplication.render();

const windowsApplication = new Application(new WindowsFactory());

windowsApplication.render();
