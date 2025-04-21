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
