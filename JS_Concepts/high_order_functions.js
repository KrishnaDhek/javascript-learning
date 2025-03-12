//Count occurrences of elements

const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

console.log(countFrequency(words));

// function countFrequency(word) {
//     let map = new Map();
//     let count = 0;
//     for (w of word) {
//         if (map.has(w)) {
//             map.set(w, map.get(w)+1)
//         }
//         else {
//             map.set(w, 1);
//         }
//     }
//     return map;
// }

//Count occurrences of elements using reduce method

function countFrequency(words) {
  return words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
}

//reduce method practice questions
//Multiply All Numbers
const numbers = [2, 3, 4];
const numMul = numbers.reduce(function (acc, num) {
  return num * acc;
}, 1);
console.log(numMul);

//Reverse an Array using
const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((acc, a) => {
  // acc.unshift(a);
  // return acc

  return [a, ...acc];
}, []);
console.log(reversedArr);

//Flatten a Nested Array
const nestedArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const newArr = nestedArr.reduce((acc, ar) => {
  return acc.concat(ar);
}, []);
console.log(newArr);

const nums = [1, 2, 3, 4, 5];

const maxItem = nums.reduce((acc, n) => {
  if (n > acc) acc = n;
  return acc;
}, 0);
console.log(maxItem);

const users = [
  {
    fName: 'krishna',
    lName: 'dhek',
    age: 28,
  },

  {
    fName: 'vinita',
    lName: 'dhek',
    age: 28,
  },

  {
    fName: 'mohit',
    lName: '32',
    age: 28,
   },  
  

  {
    fName: 'eva',
    lName: 'mehra',
    age: 4,
  },
];

const userAge = users.reduce((acc, x) => {
   
   if (acc[x.age]) {
      
      acc[x.age]= ++acc[x.age];
   }
   else {
      
     acc[x.age] = 1;
   }

   return acc;
}, {});
console.log(userAge);



const usersDetail = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 },
];


const groupedUsers = usersDetail.reduce((acc, user) => {
   if (acc[user.age]) {
      acc[user.age].push(user.name);
   }
   else {
      acc[user.age] = [user.name];
   }
   return acc;
}, {})

console.log(groupedUsers);