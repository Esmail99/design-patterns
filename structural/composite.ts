abstract class SystemItem {
  abstract getSize(): number;

  // if directory
  abstract getNumberOfItemsInside?(): number;

  // if directory
  abstract addItem?(systemItem: SystemItem): void;
}

export class File implements SystemItem {
  name;
  private size;

  constructor(name: string, size: number) {
    this.size = size;
    this.name = name;
  }

  getSize(): number {
    console.log(`File name ${this.name} with size of ${this.size} KB`);

    return this.size;
  }
}

class Directory implements SystemItem {
  name: string;
  systemItems: SystemItem[] = [];

  constructor(name: string) {
    this.name = name;
  }

  getSize(): number {
    let size = 0;

    this.systemItems.map((item) => {
      size += item.getSize();
    });

    console.log(`Directory name ${this.name} with size of ${size} KB`);

    return size;
  }

  getNumberOfItemsInside() {
    return this.systemItems.length;
  }

  addItem(systemItem: SystemItem) {
    this.systemItems.push(systemItem);
  }
}

const file1 = new File("file1.txt", 1);
const file2 = new File("file2.txt", 2);
const file3 = new File("file3.txt", 3);

const childDirectory = new Directory("ChildDirectory");
childDirectory.addItem(file1);
childDirectory.addItem(file2);

console.log("ChildDirectory Size: ", childDirectory.getSize());

const parentDirectory = new Directory("ParentDirectory");
parentDirectory.addItem(childDirectory);
parentDirectory.addItem(file3);

console.log("ParentDirectory Size: ", parentDirectory.getSize());
