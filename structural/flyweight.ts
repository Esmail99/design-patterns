enum TreeTypes {
  apple = "apple",
  orange = "orange",
}

enum TreeSizes {
  small = "small",
  large = "large",
}

class SharedTree {
  type;
  size;

  constructor(type: TreeTypes, size: TreeSizes) {
    this.type = type;
    this.size = size;
  }
}

class Tree {
  sharedTree;
  x;
  y;

  constructor(type: TreeTypes, size: TreeSizes, x: number, y: number) {
    this.sharedTree = TreeFactory.findOrCreateSharedTree(type, size);
    this.x = x;
    this.y = y;
  }
}

class TreeFactory {
  static sharedTrees: { [key: string]: SharedTree } = {};

  static findOrCreateSharedTree(type: TreeTypes, size: TreeSizes): SharedTree {
    const key = `${type}-${size}`;

    if (!this.sharedTrees[key]) {
      console.log(`Creating new SharedTree with key ${key}`);
      const newTree = new SharedTree(type, size);

      this.sharedTrees[key] = newTree;
    }

    return this.sharedTrees[key];
  }
}

const tree1 = new Tree(TreeTypes.apple, TreeSizes.large, 1, 1);
const tree2 = new Tree(TreeTypes.apple, TreeSizes.small, 2, 2);
const tree3 = new Tree(TreeTypes.apple, TreeSizes.large, 3, 3);
const tree4 = new Tree(TreeTypes.apple, TreeSizes.small, 4, 4);
const tree5 = new Tree(TreeTypes.orange, TreeSizes.small, 5, 5);
