//Write a function to check if a number is even or odd WITHOUT using the modulo (%) operator.

function checkEvenOdd(num) {
    return (num & 1) === 0;
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(101));