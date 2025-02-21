// // // const items = ['mango', 'orange', 'apple'];

// // // items.forEach(function (item) {
// // //    console.log(item); 
// // // });


// // const students = [
// //   {
// //     id: 1,
// //     name: 'Ram',
// //     class: 2,
// //     age: 7,
// //   },
// //   {
// //     id: 2,
// //     name: 'Shyam',
// //     class: 3,
// //     age: 8,
// //   },
// //   {
// //     id: 3,
// //     name: 'Riya',
// //     class: 4,
// //     age: 10,
// //   }
// // ];

// // console.log(typeof students);


// // students.forEach(function (student) {
// //     console.log(student.name);
// // });

// // const classArray = students.map(function (student) {
// //     return student.name;
// // });
// // console.log(classArray)

// const arr = ['krishna', 20, true,'time', 2025];
// // console.log(arr[0]);
//  console.log("length of array: "+arr.length);

// // for (let i = 0; i < arr.length; i++){
// //   console.log(arr[i]);
// // }
// let i=0
// // while (i<arr.length) {
// //   console.log(arr[i]);
// //   i++;
// // }

// // arr.push('work');
// // console.log('length of array: ' + arr.length);
// // while (i < arr.length) {
// //   console.log(arr[i]);
// //   i++;
// // }


// arr.unshift(29);
// console.log("length of array: " + arr.length);

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// console.log("Removed item is: " + arr.shift());
// console.log('length of array: ' + arr.length);
// console.log('Removed item is: ' + arr.shift());
// console.log('length of array: ' + arr.length);



// const courses = ['Java', 'JS', 'C', 'C++', 'PHP'];

// for (let course of courses) {
//   console.log(course);
// }

// console.log("Contains the course true/false? " + courses.includes('Python')); //O(n)
// console.log('Contains the course true/false? ' + courses.includes('JS'));


// //forEach method
// courses.forEach(course => console.log(course));

// courses.splice(2, 0, 'Python');
// console.log(courses);
// console.log('Contains the course true/false? ' + courses.includes('Python'));

// console.log(courses.unshift("Ruby"));//will return new length 
// for(let item of courses){
//   console.log(item);
// }

// // console.log(courses.indexOf('js'));
// // console.log(courses);
// // // console.log(delete courses[2]);
// // courses.splice(0,1)
// // console.log(courses);
// console.log(courses);
// let result = courses.slice(2);
// console.log(result);


const elements = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(elements);

let newElements = elements.slice(1,3);
console.log(newElements);

console.log(elements.reverse());
var items= newElements.join(",")
var result = items.split(",");
console.log(result);

const nums = [2, 3, 4, 5];
// var numSquare = nums.map(num => num * num);
// console.log("Sqaure of each number present in the number array is: " + numSquare);

var numbSqaure = nums.map(funSquare);
function funSquare(num) {
  return num ** 2;
}

console.log(numbSqaure);

