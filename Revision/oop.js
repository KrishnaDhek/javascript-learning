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
      book.display();
    }
  }
}

class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
  display() {
    console.log(`${this.name} by ${this.author}`);
  }
}

const book1 = new Book('book1', 'abc');
const book2 = new Book('book2', 'xyz');
console.log(book1);

const bookStore = new Bookstore([book1, book2]);
bookStore.listBook();

class EnemyFactory {
  generateFlyingAnimal(name) {
    return {
      name,
      fly() {
        console.log(`${this.name} can fly`);
      },
    };
  }
}

const factory = new EnemyFactory();
const flying = factory.generateFlyingAnimal('bat');
console.log(flying);
flying.fly();

//Inheritance

class Vehical {
  constructor(name, maxSpeed) {
    this.name = name;
    this.maxSpeed = maxSpeed;
  }

  getMAxSpeed() {
    return this.maxSpeed;
  }
}

class Spaceship extends Vehical {
  constructor(name, maxSpeed, numRocketEngines) {
    super(name, maxSpeed);
    this.numRocketEngines = numRocketEngines;
  }
}

const spaceship = new Spaceship('Example', 40000, 2);
console.log(spaceship.getMAxSpeed());
console.log(spaceship.numRocketEngines);





class Shape{
    constructor(color ="Transparent") {
        this.color = color;
        this.type = "Shape";

    }
    describe() {
        console.log(`A ${this.color} ${this.type}`);
    }
}

class Square extends Shape{
    constructor(color, sideLength) {
        super(color);
        this.sideLength = sideLength;
         this.type = 'Square';
    }
    area() {
        return this.sideLength * this.sideLength;
    }
}


class Rectangle extends Shape {
  constructor(color, width,hight) {
      super(color);
      this.width = width;
      this.hight = hight;
      this.type ="Rectangle"
  }
  area() {
    return this.hight * this.width;
  }
}


class Circle extends Shape{
    constructor(color, radius) {
        super(color);
        this.radius = radius
        this.type ="Circle"
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    describe() {
        console.log(`A round and awesome ${this.color} ${this.type}`);
    }
}

const square = new Square("Blue", 4);
const rectangle = new Rectangle("Black", 2, 4);
const circel = new Circle("Pink", 2);

console.log(square.area());
console.log(rectangle.area());
console.log(circel.area());

for (let i of [square, rectangle, circel]) {
    i.describe();
}