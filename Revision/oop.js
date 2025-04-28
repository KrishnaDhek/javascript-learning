//OOP in js
class Animal {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  sound(sound) {
    return `${this.name} makes the sound ${sound} `;
  }
}

const dog = new Animal('dog', 'J');
const cat = new Animal('cat', 'Ann');
console.log(dog);
console.log(cat);
dog.name = 'Pete';
console.log(dog);
console.log(dog.sound('bark'));
console.log(cat.sound('meow'));

class Student {
  constructor(name, major, grades) {
    this.name = name;
    this.major = major;
    this.grades = grades;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  gpa() {
    let avg = 0;
    for (let i = 0; i < this.grades.length; i++) {
      avg += this.grades[i] / this.grades.length;
    }
    return avg;
  }
}

const eva = new Student('Eva', 'Arts', [89, 78, 99]);
console.log(eva);
console.log(eva.gpa());
eva.addGrade(100);
console.log(eva.gpa());

class Bookstore {
  constructor(books) {
    this.books = books;
  }

  listBook() {
    for (let book of this.books) {
      console.log(`${book.name} by ${book.author}`);
    }
  }
}

class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
}

const book1 = new Book('book1', 'abc');
const book2 = new Book('book2', 'xyz');
console.log(book1);

const bookStore = new Bookstore([book1, book2]);
bookStore.listBook();

