function a() {
    var a = 10;
    function b() {
        return a;
    }

    return b;
}

var c = a();

console.log(c()); //10


function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = createCounter();
increment(); //1
increment(); //2
increment(); //3

function outer() {
    let message = "Hello"; 
    return function inner() {
        console.log(message); 
    };
}

const greet = outer(); 
message = "Hi"; 
greet();  //Hello


function outer() {
  var num = 10;

  return function inner() {
    console.log(num);
    num++;
  };
}

const fn1 = outer();
fn1();//10
fn1();//11
fn1();//12


function outer() {
    let count = 0; 

    return function inner() {
        let count = 100; 
        count++; 
        console.log(count);
    };
}

const fn = outer();
fn(); // 101
fn(); // 101 
fn(); // 101
fn(); // 101 


function makeCounter() {
  let count = 0;

  return function () {
    console.log(++count);
  };
}

const counter1 = makeCounter();//independent instance with its own closure
const counter2 = makeCounter();//independent instance with its own closure

counter1();//1
counter1();//2
counter2();//1
counter2();//2



let x = 5;

function outer() {
  let x = 10;

  function inner() {
    x++;
    console.log(x);
  }

  return inner;
}

const fn = outer();
x = 15; //does not effect the closure
fn(); //11



function createMultiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const multiplyBy2 = createMultiplier(2);
const multiplyBy3 = createMultiplier(3);

console.log(multiplyBy2(5)); // 10
console.log(multiplyBy3(5)); // 15


function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const countFn = counter();
console.log(countFn());
console.log(countFn());
