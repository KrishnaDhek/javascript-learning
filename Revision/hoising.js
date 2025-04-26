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

