//Write a function that returns a new array where each number is tripled.

const numbers = [2, 4, 6, 8, 10];

const newArray = numbers.map(num => num * 3);
console.log(newArray);


//Write a function that returns a new array where the first letter of each name is capitalized.
const names = ['alice', 'bob', 'charlie', 'dave'];
const newArrayNames = names.map(name => name.charAt(0).toUpperCase()+name.slice(1).toLowerCase());
console.log(newArrayNames);
