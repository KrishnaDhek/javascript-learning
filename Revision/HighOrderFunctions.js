//Double each number in the array
const nums = [2, 3, 4, 5, 6];
const doubledNum = nums.map((num) => num * 2);
console.log(doubledNum);


//Convert each string to uppercase

const fruits = ['apple', 'banana', 'cherry'];
const upperCaseConversion = fruits.map(function convertItem(fruit) {
    return fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase();
})
console.log(upperCaseConversion);

//Extract only name from the array of objects
const users = [
  { name: 'Krishna', age: 28 },
  { name: 'Ravi', age: 30 },
  { name: 'Priya', age: 25 },
];

const usersName = users.map((user) => {
   return user.name;
})

console.log(usersName);


//You fetch a list of TODOs from an API and want to extract only the title.
// Simulating fetched data
const todos = [
  { id: 1, title: 'Buy Milk', completed: false },
  { id: 2, title: 'Learn JavaScript', completed: true },
  { id: 3, title: 'Build Projects', completed: false }
];

function getTodostitle(todos) {
    return todos.map((todo) => todo.title);
}

console.log(getTodostitle(todos));


//Append domain to each username

const usernames = ['krishna', 'ravi', 'priya'];
// Expected: ['krishna@gmail.com', 'ravi@gmail.com', 'priya@gmail.com']


const appendDomain = usernames.map((uName) => uName.concat("@gmail.com"));
console.log(appendDomain);



//Convert array of numbers to strings with a label
const marks = [65, 72, 89];
// Expected: ['Mark: 65', 'Mark: 72', 'Mark: 89']

const addLable = marks.map((m) => 'Mark: '.concat(m));
console.log(addLable);

//Add a new field to each object
const students = [
  { name: 'Krishna', score: 85 },
  { name: 'Ravi', score: 90 }
];
// Add a `passed: true/false` field based on score >= 80
const result = students.map((student) => {
    return {
        ...student,
        passed: student.score >= 80
    };
});
console.log(result);


//Flatten nested arrays (1 level deep)
const arr = [[1, 2], [3, 4], [5]];
// Expected: [1, 2, 3, 4, 5]

const flattenArray = arr.flat()

console.log(flattenArray);


//Format a date array into readable strings
const dates = ['2025-04-06', '2024-12-25'];
// Expected: ['Date: 06/04/2025', 'Date: 25/12/2024'] (dd/mm/yyyy format)

const formattedDates = dates.map((date) => {
    const [year, month, day] = date.split('-');
    return `Date: ${day}/${month}/${year}`;
})


console.log(formattedDates);

//Capitalize every word in a sentence
const sentence = "welcome to javascript mastery";
// Expected Output: "Welcome To Javascript Mastery"

function capitalize(s) {
    const newStr = s.split(" ");
   const ans= newStr.map((str) => {
       return str.charAt(0).toUpperCase() + str.slice(1);
    })
    return ans.join(" ");

}
const result = capitalize(sentence);
console.log(result);


//Add a unique ID to each object
const users = [
    { name: 'Krishna' },
    { name: 'Ravi' },
    { name: 'Priya' }
];


const answer = users.map((user,index) => {
    
    return {
        ...user,
        id: index + 1
    };
})

console.log(answer);




//Extract only completed task titles from mixed todos
const todos = [
  { id: 1, title: 'Buy Milk', completed: false },
  { id: 2, title: 'Learn JS', completed: true },
  { id: 3, title: 'Gym', completed: true }
];
// Expected: ['Learn JS', 'Gym']

function getCompletedTodos(todos) {
  return todos.filter((todo)=>todo.completed===true).map((todo)=>todo.title)
    
}

console.log(getCompletedTodos(todos));


//Add a prefix to each name
const names = ['krishna', 'ravi', 'priya'];
// Expected: ['Mr. Krishna', 'Mr. Ravi', 'Mr. Priya']

const prefidNames = names.map((name) => {
    const result = name.charAt(0).toUpperCase() + name.slice(1);
    return `Mr. ${result}`;

})

console.log(prefidNames);


// Reformat data
const people = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' }
];
// Expected: ['John Doe', 'Jane Smith']

function reformatData(people) {
    return people.map((p)=> p.firstName +" "+ p.lastName)
}
console.log(reformatData(people));




//Practice filter() questions