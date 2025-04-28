//OOP in js
class Animal{
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    sound(sound) {
        return `${this.name} makes the sound ${sound} `;
    }
}

const dog = new Animal("dog", "J");
const cat = new Animal("cat", "Ann");
console.log(dog);
console.log(cat);
dog.name = 'Pete';
console.log(dog);
console.log(dog.sound('bark'));
console.log(cat.sound('meow'));
