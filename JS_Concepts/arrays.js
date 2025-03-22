// const arr = [1, true, 'Krishna', 22, 'test', 34];
// console.log(arr);

// //array methods

// push-inserts at last, return the new length of the array
// let item = arr.push("Dhek");
// console.log(item);
// console.log(arr);


// //unshift- inserts at the first, returns the new length of the array
// let item = arr.unshift("test");
// console.log(item);
// console.log(arr);

// //pop- deletes an item from the last, returns the deleted item
// let deletedItem = arr.pop();
// console.log(deletedItem);
// console.log(arr);


// //shift- delets an item from the front, returns the deleted item
// let deletedItem = arr.shift();
// console.log(deletedItem);
// console.log(arr);


// //reverse - reverse the array
// let reversedArray = arr.reverse();
// console.log(reversedArray);


// //sort-sorts in ascending order based on Unicode character code values by default.
// let sortedArr = arr.sort();
// console.log(sortedArr);

// //write custom sort for numbers ascending order

// const compare = (a, b) => { return a - b; }
// const num = [50, 2, 456, 9, 88, 0];
// console.log(num.sort(compare));


// //write custom sort for numbers descending order
// const compare = (a, b) => { return b - a; }
// const num = [50, 2, 456, 9, 88, 0];
// console.log(num.sort(compare));

// //delete- delete arr[index] removes the item but leaves an empty (undefined) space.
// delete arr[1];
// console.log(arr);

// //splice- deletes, inserts item in arry provided the index, item to be deleted, an the insereting item,Returns an array of deleted elements.
// const deltedItems = arr.splice(1, 1, 'check', 28);
// console.log(deltedItems);

// arr.splice(2, 1, 'age');
// console.log(arr);


// //slice- extracts a portion of array, the first argument is inclusice and the second is exclusive, returns a new array
// let portion = arr.slice(1, 5);
// console.log(portion);


// //for of iterates over values, works on array, map , string
// for (item of arr) {
//   console.log(item);//array elements
// }

// // for in iterates over keys
// for (item in arr) {
//   console.log(item);//will return the index
// }

// //foreach - forEach() executes a callback on each item but always returns undefined.
// arr.forEach(element => {
//   console.log(element);
//   return;
//  });

// //some- to find and check value , returns true if at least one value matched

// let matched = arr.some((item) => item === 45);
// console.log(matched);


//  //Array destructuring
// const colors = ['red', 'blue', 'green', 'yellow'];
// const [firstColor, secondColor] = colors;
// console.log(firstColor,secondColor);


// const numbers = [10, 20, 30, 40, 50];
// const [firstNum, ...remainingNums] = numbers;
// console.log(firstNum,remainingNums);


// const user = ['Krishna Dhek', 28, 'Frontend Developer', 'India'];
// const [name, age, role] = user;
// console.log(name,age,role);

// const coordinates = [12.34, 56.78, [90.12, 45.67]];
// const [lat, long, [alt1, alt2]] = coordinates;
// console.log(lat,long,alt1,alt2);

// const fullName = ['John', 'Doe'];
// const [first, middle = "Unknown", last="Unknown"] = fullName;
// console.log(first,middle,last);

// const product = ['Laptop', 50000, 'Electronics'];
// let[name, price, category] = product;
// [name, price, category] = [category, price, name];
// console.log(name,price,category);

// const rgb = [255, 128];
// const [red, green, blue = 0] = rgb;
// console.log(red,green,blue);


// const book = ['JavaScript Guide'];
// const [title, author = 'Unknown Author', year = 2024] = book;
// console.log(title,author,year);


// const scores = [98, 87, 76, 65, 54, 43];
// const [topScore, ...remainingScores] = scores;
// console.log(topScore,remainingScores);



// let breakfast = ['Pancakes', 'Omelette'];
// let dinner = ['Pizza', 'Pasta'];
// [breakfast, dinner] = [dinner, breakfast];// reference are swapped i.e., breakfast now points to dinner and vise-versa
// [breakfast,dinner] =[[...dinner],[...breakfast]]
// console.log(breakfast, dinner);
// breakfast.push("burger");
// console.log(breakfast);
// console.log(dinner);

// let breakfast = ['Pancakes', 'Omelette'];
// let lunch = ['Burger', 'Fries'];
// let dinner = ['Pizza', 'Pasta'];

// [breakfast, lunch, dinner] = [lunch, dinner, breakfast]; //swaps the references
// console.log(breakfast);
// console.log(lunch);
// console.log(dinner);


// [breakfast, lunch, dinner] = [[...lunch], [...dinner], [...breakfast]]; //swaps the values
// console.log(breakfast);
// console.log(lunch);
// console.log(dinner);
// breakfast.push("salad");
// console.log(breakfast);
// console.log(lunch);
// console.log(dinner);

// function multiply(...nums) {
//   return nums.reduce((product, num) => product * num, 1);
// }

// console.log(multiply(2, 3, 4)); // 24
// console.log(multiply(5, 6));    // 30

// function sumAll(...nums) {
//   return nums.reduce((acc,nums)=>acc+nums,0)
// }
// console.log(sumAll(10, 20, 30)); // 60
// console.log(sumAll(5, 15, 25, 35, 45)); // 125
// console.log(sumAll()); // 0


// const evenNumbers = [2, 4, 6, 8];
// const oddNumbers = [1, 3, 5, 7];


// const mergedArray = [...evenNumbers, ...oddNumbers];
// console.log(mergedArray);

// let arra = [];
//  function mergeArrays(...a) {
//    arra = a.flat();
//    return arra;
//  }


// mergeArrays([1, 2, 3], [3, 4], [4, 5, 6]);
// console.log(arra);

// function removeDup(arr) {
//   return arr.filter((val, index, self) => self.indexOf(val) === index);
// }
// console.log(removeDup(arra));



// function removeDup(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDup(arra)); // [1, 2, 3, 4, 5, 6]



//Basic Array Operations

function arrayOp() {
    const arr = [1, 2, 3, 4, 5];
    arr.push(6);
    arr.unshift(0);
    arr.pop();
    let index = arr.indexOf(3);

    return { modifiedArray: arr, indexOfThee: index}
}
console.log(arrayOp());



//Using .map(), .filter(), .reduce()

function processArray(arr) {
    const newArr = arr.map(a => a * 2);
    const filteredArray = newArr.filter(num => num > 5 );
    const sum = filteredArray.reduce((acc, num) => acc + num, 0);
    return { doubledArray: newArr, filteredArray: filteredArray, sum: sum };
}

console.log(processArray([2,3,4,5]));


//.some(), .every(), and .find()

function checkArray(arr) {
  const evenNumbers = arr.some(num => num%2===0)
  const positiveNumber = arr.every((num) => num >=0);
  const findNumber = arr.find((num)=> num>10);
  return { even: evenNumbers, positive: positiveNumber, find: findNumber };
}

console.log(checkArray([13, 2, 4, 53, 5, 68, 10]));


//sort(), reverse(), and slice()
function modifyArray(arr) {
  const sortedArray = arr.sort((a,b) => a-b);
  const reversedArray = [...sortedArray].reverse();
  const topThree = reversedArray.slice(0,3);
  return { sorted: sortedArray, reverse: reversedArray, top: topThree };
}
console.log(modifyArray([13, 2, 4, 53, 5, 68, 10]));


//.splice(), .concat(), .flat()

function funArray(arr1, arr2) {
    arr1.splice(2, 2);
    const conArr = arr1.concat(arr2);
    const flatArr = conArr.flat();
  return { concatenated: conArr, flatArray: flatArr };
}
console.log(funArray([13, 2, 4, 53, 5, 68, 10], [1, 6, 0, 15, 98, 100]));

//Spread Operator (...)
function mergeArrays(arr1, arr2, arr3) {
    const mergedArr = [...arr1, ...arr2, ...arr3];
    const unqiueArr = [...new Set(mergedArr)];
    return unqiueArr;
   
}
console.log(mergeArrays([1, 2, 3], [3, 4, 5], [5, 6, 7]));


function sumNumbers(...num) {
    return num.reduce((acc, val) => acc + val, 0);
}
console.log(sumNumbers(1, 2, 3, 4, 5));



//Array Destructuring
function getFirstAndLast(nums) {
  const [first, ...rest] = nums;
  const last = rest.length>0? rest.at(-1):first;
  return { first: first, last: last };
}
console.log(getFirstAndLast([10, 20, 30, 40, 50]));



//reverse
function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  return newArr
}


console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray([10, 20, 30]));    // [30, 20, 10]

function reverseArray(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]; 
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray([10, 20, 30]));    // [30, 20, 10]


//Extract the first two elements of an array and collect the rest into a separate array using destructuring.

function extractVal (arr) {
  const [first, second, ...rest] = arr;
  return {first,second,rest}

}

const arr = [10, 20, 30, 40, 50];
console.log(extractVal(arr));


//Swap the first and last elements of an array using array destructuring.
function funSwap(arr) {
  [arr[0], arr[arr.length-1]] = [arr[arr.length-1],arr[0]];
  return arr;
}
const arr = [5, 10, 15, 20, 25];
console.log(funSwap(arr));

//Swap the second and fourth elements of an array using destructuring.

function funSwapItem(arr) {
  [arr[1], arr[3]] = [arr[3], arr[1]];
  return arr;
}
const arr = [10, 20, 30, 40, 50];
console.log(funSwapItem(arr));


/**
 * Use array destructuring with the rest operator (...) to split an array into:

The first element

The last element

An array of all the middle elements
 */
function operation(arr) {
  const [first, ...middle] = arr;
  const last = middle.pop();
  return { first, last, middle };
}

const arr = [5, 10, 15, 20, 25];
console.log(operation(arr));
