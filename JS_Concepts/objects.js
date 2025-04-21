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
