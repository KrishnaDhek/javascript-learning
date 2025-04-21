const person = {
  id: 1,
  name: 'Krishna',
  age: 29,
  status: 'Active',
};
let test = 'age';
console.log(person[test]);

const person2 = person;
console.log(person2);
person2.age = 30;
console.log(person);
console.log(person2);
person['id'] = 2;
console.log(person);
console.log(Object.keys(person2));

const key = 'first name';

const user = {
  'first name': 'Alice',
  age: 25,
};

console.log(user.key); //Alice
console.log(user['first name']); //Alice

const dynamicKey = 'score';

const player = {
  name: 'Leo',
  age: 27,
  [dynamicKey]: 100,
  getDetails() {
    return `${this.name} is ${this.age} years old and has a score of ${this.score}`;
  },
};

console.log(player['score']); //100
console.log(player[dynamicKey]); //100
console.log(player.getDetails()); //Leo is 27 years old and has a score of 100
