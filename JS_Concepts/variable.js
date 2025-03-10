/*
    Variables in javascript are the memory container for the data.
    There are 3 ways in which we can define or declare a variable
    1. var
    2. let
    3. const
    
    ES6 or ES2015 discouraged the use of "var" keyword due to scoping issue and introducted two new keyword for declaring variables called let and const.

*/


//1. var keyword
// to define a variable we used the var keyword followed by the variable_name which here in case is the "personName" and assigned a value "Krishna"
var personName = 'Krishna';
console.log(personName);//Krishna

/*
    In JS, variable declaration is hoisted i.e moved to the top of their scope.

    However, only the variable decalration is hoisted, not the initialization. That is why we get undefiend instead of error.


    **Behind the sceen 
   var age;         //declaration is hoisted to the top
   console.log(26); //undefined as value is not hoisted
   age=26;          //value is assigned here
   
    
*/
console.log(age);//undefined
var age = 26;

/*
     ** Temporal Dead Zone (TDZ) with let & const:
    If a variable is declared using "let" or "const", accessing it before declaration
    results in a **ReferenceError** because it remains in the "Temporal Dead Zone" (TDZ)
    until the execution reaches the declaration line.
*/

// console.log(education); //ReferenceError: Cannot access 'education' before initialization
let education = 'Btech CSE';
console.log(education); //(No error, since we are now after the declaration)


//2. let
/*
    The "let" keyword is the preferred way to define a variable when its value needs to change.
    Unlike "var", "let" is block-scoped and does not allow re-declaration in the same scope. (see line no. 52)
*/
let address = "Bangalore";
// let address = "abcd";  //SyntaxError: Identifier 'address' has already been declared
console.log(address);

address = 'Pune';
console.log(address);

//3. const
/*
    const keyword is used to define constant, those variable whose value can not be changed

    "const" must be initialized at the time of declaration.e.g. const job;
   
*/

const motherName = "Vinita";
console.log(motherName);

// motherName = "Vinny"; //TypeError: Assignment to constant variable.
// console.log(motherName);

// const" does **not** make objects or arrays immutable. Only the variable binding is constant.
const arr = [2, 56, 1, 9];
console.log(arr);//[ 2, 56, 1, 9 ]
arr.push(0);
console.log(arr);//[ 2, 56, 1, 9, 0 ]
