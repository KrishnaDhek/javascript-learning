// //A callback function is a function that is passed as an argument to another function and executed later inside that function

// function first(callback) {
//     console.log('this is first function');
//     callback(third);

// }

// function second(callbackThird) {
//     console.log("this is callback function");
//     callbackThird();
// }
// let third = function () {
//     console.log('this is third call back function');
// }
// first(second);


// //Callback function are a way to achieve the asynchronous behaviour of javascript

// function calculateTime(operation) {
//     setTimeout(() =>
//     { console.log(`operation took 3s seconds to complete`); }, 3000);
//     operation();
// }

// function operation() {
//     console.log('krishna');
// }

// calculateTime(operation);




function caller( callBack) {
    let a = 20;
    var b = 200;
    console.log(a, b);
    return callBack(a, b);
}

function calculate(a, b) {
    if (a < b) {
        return a * b;
    }

    else {
        return a / b;
    }
}

console.log(caller(calculate));

function processData(num, callBack) {
    setTimeout(function () {
     callBack(num*num);
    }, 2000);
}

function callBack(num) {
    console.log(num);
}

processData(5, callBack);


function fetchUserData(userId, callBack) {
    setTimeout(function () {
        callBack(userId);
    },3000)
}

function processUser(userId) {
    console.log(`User data for ID: ${userId}`);
} 
fetchUserData(101, processUser);


