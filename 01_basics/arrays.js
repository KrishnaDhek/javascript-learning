// const items = ['mango', 'orange', 'apple'];

// items.forEach(function (item) {
//    console.log(item); 
// });


const students = [
  {
    id: 1,
    name: 'Ram',
    class: 2,
    age: 7,
  },
  {
    id: 2,
    name: 'Shyam',
    class: 3,
    age: 8,
  },
  {
    id: 3,
    name: 'Riya',
    class: 4,
    age: 10,
  }
];

console.log(typeof students);


students.forEach(function (student) {
    console.log(student.name);
});