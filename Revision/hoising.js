//Hoising

var a = 1;
function foo(){
    console.log(a); //undefined, as the varialbe a is redeclared in side the foo() which is move the declaration to the top of the scope and will initialize it to undefined
    var a = 2;
}
foo()


