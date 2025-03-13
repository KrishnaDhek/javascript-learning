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
      acc[user.age].count +=1;
      acc[user.age].user.push(user.name);
   }
   else {
      acc[user.age] = {count:1, user: [user.name]};
   }
   return acc;
}, {})

console.log(groupedUsers);


//You have an array of transactions where each transaction has a category and an amount. Your task is to calculate the total amount spent in each category.


const transactions = [
  { category: 'Food', amount: 15 },
  { category: 'Transport', amount: 10 },
  { category: 'Food', amount: 25 },
  { category: 'Entertainment', amount: 30 },
  { category: 'Transport', amount: 5 },
];


const total = transactions.reduce((acc, tran) => {
   if (acc[tran.category]) {
      acc[tran.category] += tran.amount;
   }
   else {
      acc[tran.category] = tran.amount;
   }

   return acc;
}, {})

console.log(total);


//Find the Longest Word in an Array

const wordsInArray = ["elephant", "dog", "hippopotamus", "cat", "zebra"];

function longestWord(words) {
   
   return words.reduce((acc, word) => {
      if (word.length > acc.length) {
         acc = word;
      }
      return acc;
 }," " )
}

console.log(longestWord(wordsInArray));



//Find the sum of all even numbers in an array using reduce()


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenSum = number.reduce((acc, num) => {
   if (num % 2 == 0) {
      acc += num;
   }
   return acc;
   
 }, 0)

console.log(evenSum);



//Given an array of numbers, return an object containing the count of even and odd numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvenOdd = numbers.reduce((acc, num) => {
   if (num % 2 == 0) {
      acc.even += num;
      
   }
   else if(num%2!=0) {
      acc.odd += num;
      
   }

return acc;
},{even: 0, odd: 0})

console.log(sumEvenOdd);




//You have an array of strings. Use .reduce() to create an object where the keys are the first letters of each word, and the values are arrays of words that start with that letter.

const words = ['apple', 'banana', 'apricot', 'blueberry', 'cherry', 'avocado'];
   
const startLetter = words.reduce((acc, w) => {

   let fLetter = w.charAt(0);

   if (acc[fLetter]) {
      acc[fLetter].push(w);
   }
   else {
      acc[fLetter] = [w];
   }
   return acc;
},{})

console.log(startLetter);



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberType = function (numbers) {
   return numbers.reduce((acc, num) => {
      if (num % 2 == 0) {
         acc.even.push(num);
      }
      else {
         acc.odd.push(num);
      }

      return acc;
   },{even: [], odd: []})
}

console.log(numberType(numbers));