export {};

abstract class MessageQueue<T> {
  abstract push(message: T): void;

  abstract listen(callback: (message: T) => void): void;
}

class MyQueue<T> implements MessageQueue<T> {
  private queue: T[] = [];

  push(message: T): void {
    console.log(`Pushing message "${message}" to MyQueue!`);

    this.queue.push(message);
  }

  listen(callback: (message: T) => void): void {
    setInterval(() => {
      const message = this.queue.shift();

      if (message) {
        callback(message);
      }
    }, 1000);
  }
}

const myQueue = new MyQueue<string>();

const processMessage = (message: string) => {
  console.log(`Process message "${message}" from MyQueue!`);
};

myQueue.listen(processMessage);

myQueue.push("Message 1");
myQueue.push("Message 2");
myQueue.push("Message 3");

setTimeout(() => {
  myQueue.push("Message 4");
}, 5500);
