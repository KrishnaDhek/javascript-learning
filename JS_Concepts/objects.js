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


//Modifying Dynamic Keys

let keyItem = "level";
const personNew = {
    name: "John",
    age: 28,
    [keyItem]: 2,
    update() {
        this[keyItem] += 1;
    }
}
console.log(personNew);
console.log(personNew[keyItem]);
console.log(personNew["level"]);
console.log(personNew.level);

/**
 * Create an object with dynamic properties that represent different user attributes (e.g., age, country). Then, create a method that takes a key and returns the value of the dynamic property based on that key.
 */

const userAge = "age";
const userCountry = "country";

const userDetails = {
    name: "Fred",
    [userAge]: 20,
    [userCountry]: "LA",
    getUserInfo(key) {
        return `User ${key}: ${this[key]}`
    }
}

console.log(userDetails.getUserInfo("age"));
console.log(userDetails.getUserInfo("country"));
console.log(userDetails.getUserInfo(userDetails.age));
console.log(userDetails.getUserInfo(userDetails.country));


//Dynamic Keys in Loops
/**
 * You are given an object with dynamic keys and need to iterate over the keys and values, logging them to the console.
 */

const dynamicKeys = ["score", "rank", "achievement"];

const player = {
  name: "Leo",
  [dynamicKeys[0]]: 100,
  [dynamicKeys[1]]: "Gold",
  [dynamicKeys[2]]: "First Place"
};

for (key in player) {
    console.log(` ${key} : ${player[key]}`);
}


//Updating a Dynamic Property

const updateKey = 'score';

const player = {
  name: 'Alex',
  [updateKey]: 50,
  updateStat(statKey, value) {
    this[statKey] = value;
  },
};

console.log('Before:', player); 

// 🔧 Update the dynamic key
player.updateStat('score', 75);

console.log('After:', player);

let key = "age";

const example = {
    name: "Abc",
    [key]: 28,
    key:"xcv",
}
console.log(example.age); //28
console.log(example[key]);//28
console.log(example["age"]);//28
console.log(example[key]);//28
console.log(example.key);//xcv
console.log(example["key"]);//xcv


const x = "role";
const user = {
  [x]: "admin",
  x: "not admin"
};

console.log(user.role);   // ?admin accessing role directly as key is known
console.log(user[x]);     // ? look for the value inside the variable x and then print its value which is admin
console.log(user["x"]);   // ? look for a literal key x and print its value which is not admin


//Output based
const dynamicKey = "score";

const player = {
  name: "Alex",
  [dynamicKey]: 42,
  dynamicKey: "Not a score"
};

console.log(player.score);        // ? 42
console.log(player[dynamicKey]);  // ?42
console.log(player["dynamicKey"]); // ?not a score



const key = "level";

const gamer = {
  name: "Sam",
  [key]: 1,
};

gamer[key] += 2; // update the dynamic key

console.log(gamer.level);     // ? 3
console.log(gamer[key]);      // ?3
console.log(gamer["level"]);  // ?3
console.log(gamer["key"]);    // ?undefined



const keys = ["score", "rank", "level"];

const player = {
  name: "Max",
  [keys[0]]: 10,
  [keys[1]]: "Silver",
  [keys[2]]: 1
};

// ✅ Task: If a key's value is a number, increase it by 5.

for (let key of keys) {
  if (typeof player[key] === "number") {
    player[key] += 5;
  }
}

console.log(player.score);   // ? 15
console.log(player.rank);    // ?silver
console.log(player.level);   // ?6


//Build Object with Dynamic Keys from Arrays
/**
 * You’re given two arrays: one of keys and another of values. Use a loop to build a new object where each key gets the corresponding value.

 */

const keys = ['name', 'age', 'country'];
const values = ['Nina', 22, 'Canada'];

const obj = {};
for (let i = 0; i < keys.length;i++) {
    obj[keys[i]] = values[i];
}
console.log(obj);

//Conditional Logic while Building an Object

/**
 * You’re given two arrays: one of keys and another of values. But here’s the twist:

If a value is undefined, we will assign a default value (e.g., "Unknown").

If the value is a number and greater than 50, we’ll label it "High".

Task: Build the object using this conditional logic.

 */

const keys = ["name", "age", "country"];
const values = ["John", 65, undefined];

const user = {};

for (let i = 0; i < keys.length; i++){
    if (values[i] === undefined) {
        user[keys[i]] = "Unknown";
    }
    else if (typeof values[i] === 'number' && values[i] >50) {
      user[keys[i]] = 'High';
    } else {
        user[keys[i]] = values[i];
    }
}


console.log(user);

//Nested Object with Dynamic Keys and Default Values
/**
 * You have two arrays:

keys (with dynamic property names).

values (with corresponding property values).

You need to:

Add these properties to an object.

If any key is missing, assign a default value ("Unknown").

If a value is a nested object, add that object as is.
 */
const keys = ['name', 'details', 'country'];
const values = ['Sara', { age: 30, profession: 'Engineer' }, 'UK'];

const user = {};
for (let i = 0; i < keys.length; i++){
    if (values[i] === undefined) {
        user[keys[i]] = "Unknown";
    } else if (typeof values[i] === 'object') {
        user[keys[i]] = values[i];
    } else {
        user[keys[i]] = values[i]
    }
}
console.log(user);


//Complex Object with Nested Updates
const keys = ["name", "location", "skills"];
const values = ["Alice", "New York", { languages: ["English", "Spanish"], yearsOfExperience: 5 }];

const user = {};

let newKey = 'status';
// Use a loop to dynamically build the object and handle updates
for (let i = 0; i < keys.length; i++){
    // If the value is an object, check if it has the "yearsOfExperience" property and update it if needed
    if (typeof values[i] === 'object') {
       
         if (values[i].yearsOfExperience < 10) {
           values[i].yearsOfExperience += 1;
         }
        
         user[keys[i]] = values[i];
        
    } else if (values[i] === undefined) {
        user[keys[i]] ="Unknown"
    } else {
        user[keys[i]] = values[i];
    }
}
user[newKey] = "active";
console.log(user);
delete user[keys[1]];
delete user[keys[2]];
console.log(user);
// If a key's value is missing, use "Unknown" as the default value



const mexico = {
    id: 24,
    name: "Mexico",
    capital: "Maxico City",
    neighbour :["USA","Guatemala","Belize"]
}
console.log(mexico);
mexico.id = 25;
mexico["neighbour"].push("Honduras");
console.log(mexico);
delete mexico.neighbour;
console.log(mexico);



const myPet = {
    name: "Sudo",
    type: "dog",
    breed: "Poodle",
    age: 7,
    friend: ["Bit", "Byte", "Data"],

}
console.log(myPet);
myPet.color = "black";
console.log(myPet);
myPet.breed = "Beagle";
console.log(myPet);
myPet.friend.pop();
console.log(myPet);
myPet.friend.push("Chip");
console.log(myPet);



const banana = {
    name: "banana",
    quant: 1,
    price:1.95
}
const apple = {
  name: 'apple',
  quant: 1,
  price: 1.45,
};
const candy = {
  name: 'candy',
  quant: 1,
  price: 3.05,
};

const store = {
    storeNumber: 5,
    locationCity: 'Milan',
    locationCountry: "Italy",
    product:[banana,apple,candy]
  
};
console.log(store);
console.log(store.product);
console.log(store.product[2]);
store.product[0].price = 1.75;
console.log(store.product[0].price);
console.log(store);
console.log(banana);
candy.price = 4.99;
console.log(store);
console.log(candy);


const myConsole = {
    log: (message) => {
        console.log(message);
    }
}
myConsole.log("Hello");

/**
 * Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
 */

const user = {};
user.name = "John";
user.surname = "Smith";
console.log(user);
user.name = "Pete"
console.log(user);
delete user.name;
console.log(user);


/**
 * Check for emptiness
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
 */

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

const obj = {name:"K"};
console.log(isEmpty(obj));

/**
 * Sum object properties
We have an object storing salaries of our team:
 */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};


function sumProperty(salaries){
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}
console.log(sumProperty(salaries));

/**
 * Multiply numeric property values by 2
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
 */

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

multiplyNumeric(menu);
console.log(menu);
menu["new data"] = "test";
console.log(menu);
console.log(menu["new data"]);


const someKey = "test";
const o = {
    [someKey]: 4,
}
console.log(o[someKey]);
/**so give me all the important points that i should know about obejct, the way of creation, there most common methods, object reference, dynamic key  */

//Convert an array of key-value pairs into an object.
const input = [
  ['name', 'Alice'],
  ['age', 25],
  ['role', 'admin'],
];


let output = {};
output = Object.fromEntries(input);
console.log(output);


//Add a user-defined key and value to an object.
// Let user input be:
const key = "location";
const value = "Delhi";

// Start with:
const obj = { name: "Bob" };
obj[key] = value;
console.log(obj);



//You have a list of users. Group them by role.
const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
  { name: 'David', role: 'user' },
];

const group = {};
for (let i = 0; i < users.length;i++) {
    let role = users[i].role;
    let name = users[i].name;

    if (!group[role]) {
        group[role] = [];
    }
    group[role].push(name);
}
console.log(group);