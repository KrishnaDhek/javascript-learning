// // //A callback function is a function that is passed as an argument to another function and executed later inside that function

// // function first(callback) {
// //     console.log('this is first function');
// //     callback(third);

// // }

// // function second(callbackThird) {
// //     console.log("this is callback function");
// //     callbackThird();
// // }
// // let third = function () {
// //     console.log('this is third call back function');
// // }
// // first(second);

// // //Callback function are a way to achieve the asynchronous behaviour of javascript

// // function calculateTime(operation) {
// //     setTimeout(() =>
// //     { console.log(`operation took 3s seconds to complete`); }, 3000);
// //     operation();
// // }

// // function operation() {
// //     console.log('krishna');
// // }

// // calculateTime(operation);

// function caller(callBack) {
//   let a = 20;
//   var b = 200;
//   console.log(a, b);
//   return callBack(a, b);
// }

// function calculate(a, b) {
//   if (a < b) {
//     return a * b;
//   } else {
//     return a / b;
//   }
// }

// console.log(caller(calculate));

// function processData(num, callBack) {
//   setTimeout(function () {
//     callBack(num * num);
//   }, 2000);
// }

// function callBack(num) {
//   console.log(num);
// }

// processData(5, callBack);

// function fetchUserData(userId, callBack) {
//   setTimeout(function () {
//     callBack(userId);
//   }, 3000);
// }

// function processUser(userId) {
//   console.log(`User data for ID: ${userId}`);
// }
// fetchUserData(101, processUser);

// function test() {
//   for (var i = 1; i <= 5; i++) {
//     function revised(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     revised(i);
//   }
// }

// test();

// function calculateResult(num, callBack) {
//     return callBack(num);
// }

// const checkEvenOdd = (num) => { 
//     if (num % 2 == 0) {
//         return `${num} is Even!`
//     }
//     else {
//         return `${num} is Odd!`;
//     }
//  }

// console.log(calculateResult(7, checkEvenOdd));


// function processUser(user, getFullName) {
//     return getFullName(user);
// }
// let getFullName = (user) => {
//     let fullName = "";
//     for (key in user) {
//         if (key === 'firstName' || key === 'lastName') {
//             fullName += user[key] +" ";
//         }
//     }
//     return fullName;
// }
// const user = { firstName: 'Krishna', lastName: 'Dhek', age: 28 };

// console.log(processUser(user, getFullName));




// function filterNumbers(num, callBack) {
//     return callBack(num);
// }

// const keepEvenNumbers = (num) => num.filter( n=> n%2==0)


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(filterNumbers(numbers, keepEvenNumbers));


// function processProducts(products, callBack) {
//     return callBack(products);
// }


// const expensiveProducts = (products) => products.filter((n) => n.price > 500);

// const products = [
//   { name: 'Laptop', price: 70000 },
//   { name: 'Mouse', price: 300 },
//   { name: 'Keyboard', price: 800 },
//   { name: 'Monitor', price: 5000 },
// ];

// console.log(processProducts(products, expensiveProducts));



// function modifyProducts(products, callBack) {
//     return callBack(products);
// }

// const applyDiscount = (products) => products.map((p) => {
//     if (p.price > 1000) {
//         return { ...p, price: p.price - (p.price * 10) / 100 };

//     }

//     return p;

// })


// console.log(modifyProducts(products, applyDiscount));


// const processOrders = (orders, callBack) => callBack(orders);


// const filterExpensiveOrders = (order) => order.filter((order) => (order.price * order.quantity) > 1000);

// const orders = [
//   { id: 1, item: 'Phone', price: 20000, quantity: 1 },
//   { id: 2, item: 'Charger', price: 500, quantity: 2 },
//   { id: 3, item: 'Headphones', price: 800, quantity: 2 },
//   { id: 4, item: 'Laptop', price: 60000, quantity: 1 },
// ];
// console.log(
// processOrders(orders, filterExpensiveOrders));




// const processStudents = (students, callBack) =>  callBack(students);

// const yourCallbackFunction = (students) => students.filter((s) => s.marks > 80);


// const students = [
//   { name: 'Alice', marks: 75 },
//   { name: 'Bob', marks: 90 },
//   { name: 'Charlie', marks: 82 },
//   { name: 'David', marks: 60 },
// ];

// console.log(processStudents(students, yourCallbackFunction));





// function fetchData(callBack) {
//   console.log('Fetching data...');
//   setTimeout(() => {
//     callBack('Data received');
//   }, 2000);
// }

// function handleData(data) {
//   console.log(data);
// }

// fetchData(handleData);
// console.log('End of script');





// function compute(num, callBack) {
//   console.log('Computing...'); //2
//   return callBack(num);
// }

// const addFive = (n) => n + 5;

// setTimeout(() => console.log(compute(10, addFive)), 0);//3

// console.log('Task done'); //1




// function executeTask(taskName, callBack) {
//   console.log(`Starting ${taskName}...`);
//   setTimeout(() => {
//     callBack(`${taskName} completed`);
//   }, 1000);
// }

// function logResult(result) {
//   console.log(result);
// }

// executeTask('Download', logResult);
// console.log('Waiting...');



// function fetchData(callBack) {
//   console.log('Fetching data...');
//   setTimeout(() => {
//     callBack('Data received');
//     console.log('Processing data...');
//   }, 2000);
// }

// function handleData(data) {
//   console.log(data);
// }

// fetchData(handleData);
// console.log('End of script');






// function delayedMessage(message, delay, callBack) {
//   setTimeout(() => {
//     console.log(message);
//     callBack();
//   }, delay);
// }

// console.log('Start');

// delayedMessage('Hello, Krishna!', 3000, () => {
//   console.log('Callback executed');
// });

// console.log('End');



// function fetchData(callBack) {
//   console.log('Fetching data...');
//   setTimeout(() => {
//     console.log('Data retrieved');
//     callBack();
//   }, 2000);
// }

// console.log('Start');

// fetchData(() => {
//   console.log('Processing data...');
// });

// console.log('End');




// function fetchDetails(callBack) {
//   console.log('Fetching details...');
//   setTimeout(() => {
//     console.log('Details retrieved');
//     callBack();
//   }, 0);
// }

// console.log('Start');

// fetchDetails(() => {
//   console.log('Processing details...');
// });

// console.log('End');
