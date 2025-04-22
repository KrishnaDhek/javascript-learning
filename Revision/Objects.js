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
