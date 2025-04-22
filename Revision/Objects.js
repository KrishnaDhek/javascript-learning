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
/**
 * Create an object calculator with methods add, subtract, and multiply that perform basic arithmetic operations. Log the results of the methods with different inputs.
 */
const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  subtract: function (a, b) {
    console.log(Math.abs(a - b));
  },
  multiply: function (a, b) {
    console.log(a * b);
  },
};

calculator.add(3, 5);
calculator.subtract(13, 15);
calculator.multiply(2, 5);


//Create an object person with a method greet() that returns a greeting using the name property of the object. Call this method and log the result.

const person = {
    name:"Krishna",
    greet :function()  {
        return `Hello ${this.name}!`;
    }
}
console.log(person.greet());


//Create an object car with properties make and model and a method getDescription that returns a description of the car (e.g., "Toyota Corolla"). Log the result of calling getDescription().

const car = {
    make: "Toyota",
    model: "Corolla",
    getDescription: function () {
        return `${this.make} ${this.model}`;
    }
}
console.log(car.getDescription());


//Arrow Functions and this

//Modify the greet method in the person object to be an arrow function. Call the method and explain why this.name returns undefined.

const person = {
  name: 'Krishna',
  greet:  () => {
    return `Hello ${this.name}!`; //this points to the global object or windows object in case of arrow function as name is not present in the global thus it returns undefined
  },
};
console.log(person.greet());


/**
 * Create a function calculatePrice that returns the sum of two arguments. Then, add this function to an object cart. Try calling this function both as a method of the cart object and standalone. What happens to the value of this?
 */
const calculatePrice = function(a,b) {
  return this.price + this.tax;
};
const objCart = {
    price: 200,
    tax:10,
    calculatePrice: calculatePrice
        
    
}
console.log(objCart.calculatePrice());



//Section 4.Advanced Object Manipulation
//Object Assignment and Copying
/**
 * Create an object original with properties name and age. Use Object.assign() to copy this object to a new object copy. Change the age in copy and log both original and copy.
 */

const original = {
    name: "Krishna",
    age:27
}

const copy = Object.assign({}, original);
console.log("original: ",original);
console.log("copy",copy);
copy.age = 29;
console.log("original: ",original);
console.log("copy: ", copy);


//Use the spread operator (...) to copy an object original to a new object newObj. Modify the newObj and log both objects.

const newCopy = { ...original };
console.log(newCopy);
newCopy.age = 20;
console.log("orignal in spear operation: ", original);
console.log('newCopy in spear operation: ', newCopy);



/**
 * Use Object.keys(), Object.values(), and Object.entries() on the person object and log the results of each method.
 */


const person = {
  name: 'Krishna',
  greet: () => {
    return `Hello ${this.name}!`; //this points to the global object or windows object in case of arrow function as name is not present in the global thus it returns undefined
  },
};
console.log(person.greet());

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

//Nested Objects and Iteration

/**
 * Create a nested object student with properties name, age, and a sub-object grades. Iterate through the grades object and log the subject names and scores.
 */

const student = {
  name: 'krishna',
  age: 25,
    grades: { grade1: 'A', grade2: 'A', grade3: 'B' },
  
};

for (let key in student.grades) {
    console.log(student.grades[key]);
}



/**
 * Create a nested object representing a company with employees and departments. Write a function that adds a new employee to the correct department.
 */

const company = {
    department: { admin:{employee:{emp1:"krishna",emp2:"Vinita"}}, member:{employee:{emp1:"eva"}}}
};

function addEmployee(department, employee) {
    if (company.department[department]) {
        const empKey = "emp" + (Object.keys(company.department[department].employee).length + 1);
        company.department[department].employee[empKey] = employee;
        console.log(
          `Added ${employee} as ${empKey} to ${department} department`
        );
    } else {
        console.log(`${department} not found`);
    }
    
}
addEmployee("admin","j")

//Section 5: Edge Cases and Predictions

const obj = { a: 1, b: 2 };
obj["c"] = 3;
console.log(obj);//{ a: 1, b: 2,c:3 };

const obj1 = { name: "Alice" };
const obj2 = obj1;
obj2.name = "Bob";
console.log(obj1);//{name: "Bob"}

const map = new Map();
map.set("key", "value");
map.set({}, "another value");
console.log(map);// {key => value, {}=>another value}


/**
 * 5.2 Conceptual Questions
What is the difference between using Object.prototype and Map.prototype when working with JavaScript objects and Maps?

How does JavaScript handle object references when they are assigned to another variable? Explain with an example.

How do you add a dynamic key-value pair to an existing object? Give an example where the key is provided by the user.
 */