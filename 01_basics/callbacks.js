//A callback function is a function that is passed as an argument to another function and executed later inside that function

function first(callback) {
    console.log('this is first function');
    callback(third);

}

function second(callbackThird) {
    console.log("this is callback function");
    callbackThird();
}
let third = function () {
    console.log('this is third call back function');
}

first(second);


//Callback function are a way to achieve the asynchronous behaviour of javascript

function calculateTime(operation) {
    setTimeout(() =>
    { console.log(`operation took 3s seconds to complete`); }, 3000);
    operation();
}

function operation() {
    console.log('krishna');
}

calculateTime(operation);
