//SECTION 1: Object Basics (Syntax, Access, Modify)
//Create an object with 3 key-value pairs and print it.
const obj = {
    name: "John",
    age: 28,
    status:"active"
}
console.log(obj);
let key = 'status';

//Access object values using both dot and bracket notation.
console.log(obj.name);
console.log(obj[key]);

//Add a new property dynamically and log the updated object.
obj["last-active-year"] = 2025;
console.log(obj);

//Delete a property from an object and show the result.
console.log(delete obj.age);//return boolean
console.log(obj);

//Check if a key exists using in and hasOwnProperty.
console.log("age" in obj);
console.log(obj.hasOwnProperty("name"));

//Loop over an object using for...in and print all keys and values.
for (let key in obj) {
    console.log(` ${key} : ${obj[key]}`);
}

//What will be the output?
// const obj = { a: 1, b: 2 };
// console.log(obj["c"]);  // ?undefined


//Create a copy of an object using Object.assign.
const newObj = Object.assign({},obj);
console.log(newObj);


//Explain difference between undefined and null in object values.
/**
 * Undefined mean memory has been allocated while null means intentional absence of a value
 */


//Predict output:
const person = { name: "John" };
person.name = "Jane";
console.log(person);  // ?{ name: "Jane" };



const a = {};
const b = a;
b.name = 'Zara';
console.log(a.name);



let obj = { a: 1 };
delete obj.a;
delete obj.b;
console.log(obj);


//Object Key Overwrite Check
const obj1 = {};
let key1 = {};
let key2 = {};

obj1[key1] = "value 1";
obj1[key2] = "value 2";
console.log(obj1); // js automatically converts it to string ["object Object"]
console.log(obj1[key1]);// both the keys are now ["object Object"] thus values is overriden
console.log(obj1[key2]);


const map = new Map();
map.set(key1, "value 1");
map.set(key2, "value 2");

console.log(map.get(key1));
console.log(map.get(key2));
console.log(map);



//Storing and Accessing Mixed Types in a Map
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };
const obj = { name: "Charlie" };

const map = new Map();

map.set(person1, "Person 1's Info");
map.set(person2, "Person 2's Info");
map.set(obj, "Person 3's Info");

console.log(map.get(person1)); //  Person1's info
console.log(map.get(person2)); //  Person2's info
console.log(map.get(obj)); // Person3's info 
console.log(map);/**Map(3) {
  { name: 'Alice' } => "Person 1's Info",
  { name: 'Bob' } => "Person 2's Info",
  { name: 'Charlie' } => "Person 3's Info"
}
 */

//Object Manipulation
const book = {
    title: "JS Concept",
    author: "ChatGPT",
    price: 1000
};
book.price = 20;
console.log(book);

console.log("author" in book);
console.log(book.hasOwnProperty("author"));
for (let key in book) {
    console.log(`${key} : ${book[key]}`);
}

//Section 2: Maps
//Create an empty Map and add a key-value pair where the key is "name" and the value is "John". Log the Map.
const map = new Map();
map.set("name", "John");
console.log(map);
//Create a Map where the key is a number and the value is a string. Retrieve the value using the number as the key.
map.set(123, "abc");
console.log(map);
//Create a Map with an object as a key (like { id: 1 }) and a string as a value. Log the Map and retrieve the value by using the object key.
let key = { id: 1 };
map.set(key, "testing");
console.log(map);
console.log(map.get(key));
//Add a new entry to the Map with another object key ({ id: 2 }) and log the entire Map.
let key1 = { id: 2 };
map.set(key1, 'check');
console.log(map);
console.log(map.get(key1));



//2.2 Objects as Map Keys
const map = new Map();
const obj3 = {};
const obj4 = {};

map.set(obj3, "first");
map.set(obj4, "second");
console.log(map.get(obj3));
console.log(map.get(obj4));
console.log(map);

/**
 * Explain the difference between using objects as keys in a Map versus using objects as keys in a plain object. Try an example where you use an object as a key in both a Map and a regular object. What do you observe?
 */

/**
 * when using object as key in map we are passing the reference induvidually this will not overdie the actual objects propert till they point to different objects, but in plain old js object when we try to use object as key js internally converts them to string as ["object Object"] thus overriding the values, as in the above example we can see the map has two objects as key and when there values is retrived we get unique values, but when dealing with regular objects that time we see an override of the values
 */



//Advanced Map Operations

/**
 * Create a Map and add a key1 (an object) and a key2 (another object) with values "val1" and "val2". Modify the properties of key1 and key2 after they’ve been added to the Map. Log the values using the Map’s get() method.
 */
const newMap = new Map();
let key1 = {};
let key2 = {};

newMap.set(key1, "val1");
newMap.set(key2, 'val2');

console.log("Before update: ", newMap);
console.log(newMap.set(key1, "new val1"));
console.log(newMap.set(key2, 'new val2'));
console.log("After update:", newMap);

//Create a Map with multiple key-value pairs and use the has() method to check if certain keys exist in the Map.


const newMap = new Map();
let key1 = {name:"L", age:2};
let key2 = { name: 'C', age: 12 };
let key3 = { name: 'v', age: 28 };

newMap.set(key1, 'val1');
newMap.set(key2, 'val2');
newMap.set(key3, 'val3');

console.log(newMap.has(key1));



//Section 3: Objects and Functions

//Object with Methods