//OOP in js
class Animal{
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }
}

const dog = new Animal("dog", "J");
const cat = new Animal("cat", "Ann");
console.log(dog);
console.log(cat);
dog.name = 'Pete';
console.log(dog);