export {};

// Aggregation represents a "whole-part" relationship between objects.
// If the library is destroyed, the books remains!
class Book {
  constructor(private title: string, private author: string) {}

  print() {
    console.log(`Book name is "${this.title}" by "${this.author}"`);
  }
}

class Library {
  private books: Book[] = [];

  addBook(book: Book) {
    this.books.push(book);
  }

  getNumberOfBooks() {
    return this.books.length;
  }

  print() {
    console.log(`This is a library that has ${this.getNumberOfBooks()} books!`);
  }
}

const library = new Library();

const book1 = new Book("Title 1", "Author 1");
const book2 = new Book("Title 2", "Author 2");
const book3 = new Book("Title 3", "Author 3");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.print();
