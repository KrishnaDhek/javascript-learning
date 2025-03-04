//Write a function that returns a new array where each number is tripled.

const numbers = [2, 4, 6, 8, 10];

const newArray = numbers.map(num => num * 3);
console.log(newArray);


//Write a function that returns a new array where the first letter of each name is capitalized.
const names = ['alice', 'bob', 'charlie', 'dave'];
const newArrayNames = names.map(name => name.charAt(0).toUpperCase()+name.slice(1).toLowerCase());
console.log(newArrayNames);


//You have an array of temperatures in Celsius. Convert them to Fahrenheit
const celsiusTemps = [0, 10, 20, 30, 40];

const fahrenheitTemp = celsiusTemps.map(value => 
    value = (value * 9 / 5) + 32
);
console.log(fahrenheitTemp);

//You have an array of numbers. Convert each number to a string using map().
const nums = [1, 2, 3, 4, 5];

// const numToString = nums.map(num => `${num}`);
const numToString = nums.map((num) => num.toString());
console.log(numToString);


//You are given an array of words. Use map() to return an array containing the length of each word.
const words = ['apple', 'banana', 'cherry', 'date'];
const wordLength = words.map(word => word.length);
console.log(wordLength);


//Convert an array of prices in USD to INR (1 USD = 83 INR).

const pricesUSD = [10, 20, 50, 100];

const pricesINR = pricesUSD.map(price => price * 83);
console.log(pricesINR);


//You have an array of objects representing students and their scores:
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
  { name: 'David', score: 95 },
];

const str = students.map(student => `${student.name} scored ${student.score}`);
console.log(str);


//Use map() to return an array where true means even and false means odd for this array

const items = [10, 15, 22, 29, 30];
const booleanItems = items.map(item => item % 2 === 0);

console.log(booleanItems);

//Use map() to return an array of product prices before tax (tax rate = 10%)

const pricesWithTax = [110, 220, 330, 440];
const priceBeforeTax = pricesWithTax.map((price) => Math.round(price/1.1));
console.log(priceBeforeTax);

// Use map() to return an array of ages from an array of birth years, assuming the current year is 2025.

const birthYears = [1990, 1985, 2000, 2010];
const age = birthYears.map(year => 2025 - year);
console.log(age);


//Use map() to extract only the domain names (remove https:// or http://) from an array of URLs.
const urls = [
  'https://google.com',
  'http://facebook.com',
  'https://twitter.com',
];

const domain = urls.map((url) => url.replace(/^https?:\/\//, ''));
console.log(domain);



//Convert an array of student objects into an array of student grades (A/B/C/D/F) based on scores
const studentDetails = [
  { name: 'Alice', score: 92 },
  { name: 'Bob', score: 76 },
  { name: 'Charlie', score: 85 },
  { name: 'David', score: 60 },
  { name: 'Eve', score: 45 },
];

const studentGrades = studentDetails.map(scores => {
    let grade;
    if (scores.score >= 90) {
      grade = 'A';
    } else if (scores.score >= 80 ) {
      grade = 'B';
    } else if (scores.score >= 70 ) {
      grade = 'C';
    } else if (scores.score >= 60) {
      grade = 'D';
    }
    else {
        grade = 'F';
    }

    return grade;
})

console.log(studentGrades);


//Transform an array of users into an array of usernames in lowercase, prefixed with @.
const users = [
  { id: 1, username: 'AliceW' },
  { id: 2, username: 'Bob123' },
  { id: 3, username: 'CharlieX' },
];

const usernames = users.map(user => `@${user.username.toLowerCase()}`);
console.log(usernames);



//Convert an array of objects representing products into an array of strings formatted as: "Product Name - $Price"

const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Phone', price: 800 },
  { name: 'Tablet', price: 600 },
];


const itemDetails = products.map(product => `${product.name}-$${product.price}`);
console.log(itemDetails);