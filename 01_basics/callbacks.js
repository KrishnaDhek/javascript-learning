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