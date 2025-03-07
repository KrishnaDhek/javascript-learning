const arr = [1, true, 'Krishna', 22, 'test', 34];
// console.log(arr);

//array methods

//push-inserts at last, return the new length of the array
// let item = arr.push("Dhek");
// console.log(item);
// console.log(arr);


//unshift- inserts at the first, returns the new length of the array
// let item = arr.unshift("test");
// console.log(item);
// console.log(arr);

//pop- deletes an item from the last, returns the deleted item
// let deletedItem = arr.pop();
// console.log(deletedItem);
// console.log(arr);


//shift- delets an item from the front, returns the deleted item
// let deletedItem = arr.shift();
// console.log(deletedItem);
// console.log(arr);


//reverse - reverse the array
// let reversedArray = arr.reverse();
// console.log(reversedArray);


//sort-sorts in ascending order based on Unicode character code values by default.
// let sortedArr = arr.sort();
// console.log(sortedArr);

//write custom sort for numbers ascending order

// const compare = (a, b) => { return a - b; }
// const num = [50, 2, 456, 9, 88, 0];
// console.log(num.sort(compare));


//write custom sort for numbers descending order
// const compare = (a, b) => { return b - a; }
// const num = [50, 2, 456, 9, 88, 0];
// console.log(num.sort(compare));

//delete- delete arr[index] removes the item but leaves an empty (undefined) space.
// delete arr[1];
// console.log(arr);

//splice- deletes, inserts item in arry provided the index, item to be deleted, an the insereting item,Returns an array of deleted elements.
// const deltedItems = arr.splice(1, 1, 'check', 28);
// console.log(deltedItems);

// arr.splice(2, 1, 'age');
// console.log(arr);


//slice- extracts a portion of array, the first argument is inclusice and the second is exclusive, returns a new array
// let portion = arr.slice(1, 5);
// console.log(portion);


//for of iterates over values, works on array, map , string
// for (item of arr) {
//   console.log(item);//array elements
// }
//for in iterates over keys
// for (item in arr) {
//   console.log(item);//will return the index
// }

//foreach - forEach() executes a callback on each item but always returns undefined.
// arr.forEach(element => {
//   console.log(element);
//   return;
// });

//some- to find and check value , returns true if at least one value matched

// let matched = arr.some((item) => item === 45);
// console.log(matched);