function funC(a, b) {
    return a + b;
}
console.log(funC(2400, 450));


//arrow function

let result = (a) => {
    return a * a;
}

console.log(result(5));

//Factorial

let fact = (n)=>{
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}

console.log("Factorial of the given number is: "+fact(5));