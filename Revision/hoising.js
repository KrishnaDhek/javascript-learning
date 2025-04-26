//Hoising

var a = 1;
function foo(){
    console.log(a); //undefined, as the varialbe a is redeclared in side the foo() which is move the declaration to the top of the scope and will initialize it to undefined
    var a = 2;
}
foo()


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