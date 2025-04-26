//Hoising

var a = 1;
function foo() {
  console.log(a); //undefined, as the varialbe a is redeclared in side the foo() which is move the declaration to the top of the scope and will initialize it to undefined
  var a = 2;
}
foo();

console.log(foo()); // What will this print? hello, here foo is being called and its returned value is being printed whoch is in this case "Hello"

function foo() {
  return 'Hello!';
}

function outer() {
  var count = 0;

  function inner() {
    return count++;
  }

  return inner;
}

var counter = outer();
console.log(counter());
console.log(counter());
console.log(counter());

function outer() {
  var a = 10;
  function inner() {
    console.log(a); //20
  }
  a = 20;
  return inner;
}
var inFun = outer();
inFun();

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const counter1 = createCounter();
counter1.increment(); // 1
counter1.increment(); // 2
counter1.decrement(); // 1

function makeMultiplier(x) {
  return function (y) {
    console.log(x * y);
  };
}

const multiplyBy2 = makeMultiplier(2);
const multiplyBy3 = makeMultiplier(3);

multiplyBy2(5); // ?
multiplyBy3(5); // ?

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment(); // ?1
counter1.increment(); // ?2
counter2.increment(); // ?1
counter1.decrement(); // ?1
counter2.decrement(); // ?0

function greetingGenerator(name) {
  return function (greet) {
    console.log(`${greet}, ${name}!`);
  };
}

const greetJohn = greetingGenerator('John');
const greetJane = greetingGenerator('Jane');

greetJohn('Hello'); // ?
greetJane('Hi'); // ?
greetJohn('Goodbye'); // ?

console.log(counter); // ? undefined, because of here it is an function expression which is hoisted based on the type of keyword used, var is hoisted an initialized with undefined
var counter = createCounter();

function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count); //1,2
  };
}

counter();
counter();

function outer() {
  var a = 1;
  return function inner() {
    console.log(a); ////thus it prints 1
  };
}

var counter = outer(); // here counter is pointing to inner as outer is returning inner, so the new context will be inner, which will remember the value os a from its outer scope due to lexical scoping

counter();
console.log(a); //error, here a is not defined as var is functional and global scoped



var a = 10; //gloabl

function outer() {
  var a = 20;
  return function inner() {
    var a = 30;
    console.log(a); //30, var is local to inner thus need not look in the lexical scope
  };
}

var counter = outer(); 

counter();
console.log(a); // a is global thus 10;



function outer() {
  var a = 10;

  setTimeout(function () {
    console.log(a); //20, after 1sec, by the time this function is executed the value of a was updated to 20 
  }, 1000);

  a = 20;
}

outer();
