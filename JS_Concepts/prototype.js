/* Prototype in JavaScript:

    In JavaScript, every object has a hidden property called [[Prototype]], which can be accessed using __proto__. This __proto__ creates the actual link used by the JavaScript engine to perform prototype chaining.
    If a property or method is not found on the current object, JavaScript looks up the prototype chain — following __proto__ — until it either finds the property or reaches null, which marks the end of the chain.
*/


//Write a constructor function called Person that takes a name as a parameter and stores it as a property on the object.

function Person(name) {
    this.name = name;
}

const p = new Person("Krishna");
console.log(p.name); // should print "Krishna"


//Add a shared method using .prototype
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}`
}

const p = new Person("Krishna");
console.log(p.greet()); // should print "Krishna"

const p1 = new Person("Radhe")
console.log(p1.greet());


//Create a constructor and add a shared method
function car(brand, model) {
    this.brand = brand;
    this.model = model;

}

car.prototype.getDetails = function () {
    return `Brand ${this.brand}, Model ${this.model}`
};

const car1 = new car("audi", 'Q8');
const car2 = new car("tata", 'safari');
console.log(car1.getDetails());
console.log(car2.getDetails());


//Create a constructor and add a shared method
function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.getSummary = function () {
    return `The book ${this.title} is written by ${this.author}.`;
};

const book1 = new Book("JS to know", "Krishna");
const book2 = new Book("Mother", "Vinita");

console.log(book1.getSummary());
console.log(book2.getSummary());


//Create Inheritance between Constructors
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    return `My name is ${this.name}.`;
}

function Dog(name) {
   Animal.call(this, name)
}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    return `Woof! I am ${this.name}`;
}

const dog1 = new Dog("Rocky");
console.log(dog1.speak());
console.log(dog1.bark());
