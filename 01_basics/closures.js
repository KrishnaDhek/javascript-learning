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

const fun = outer();
x = 15; //does not effect the closure
fun(); //11



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


let x = 10;

function example() {
  x = 20;
  console.log(x);
}

example();
console.log(x);



function outer() {
  let a = 1;

  function inner() {
    let a = 2;
    console.log(a);
  }

  inner();
  console.log(a);
}

outer();



function outer() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

const counter = outer();
counter();
counter();




let a = 10;

function outer() {
  let a = 20;

  function inner() {
    let a = 30;
    console.log(a);
  }

  inner();
}

outer();
console.log(a);




function outer() {
  let count = 0;

  function increment() {
    count++;
    return count;
  }

  return increment;
}

const counter = outer();
console.log(counter());
console.log(counter());



//Closures and settimeout


function test() {
  for (var i = 1; i <= 5; i++) {
    function revised(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    revised(i);
  }
  console.log('Testing....'); //Asynchronous nature of setTimeout means it doesn’t block the following code. it got printed immediately as the for loop completed the execution verfy fast before the settimeout function run
}

test()


function x() {
    function y() {
        console.log(a);
    }
    let a = 20;
    return y;
}
 x()();
