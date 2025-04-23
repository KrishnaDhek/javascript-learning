//Polyfill for bind() - bind() returns a function ans using the return function we call

Function.prototype.myBind = function (currentContext, ...args) {
    if (typeof this !== 'function') {
        throw new Error(`${this} must be a function`);
    }

    currentContext.funC = this;

    return function (...otherArgs) {
        currentContext.funC(...args, ...otherArgs);
    }
}


const obj1 = {
    name:"krishna"
}

function printDetails(age,place) {
    console.log(`Hey ${this.name} and your age is ${age} and your are from ${place}`);
}

let result = printDetails.myBind(obj1, 28);

result("Lohaghat");