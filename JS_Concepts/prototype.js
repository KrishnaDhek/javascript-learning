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
