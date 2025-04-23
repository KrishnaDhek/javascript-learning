//Polyfill for apply

Function.prototype.myApply = function (currentContext, arg) {
    if (typeof this !== 'function') {
        throw new Error(`${this} must be a function`);
    }

    if (arg !== undefined && !Array.isArray(arg)) {
        throw new TypeError(`Second argument must be array or undefined `)
    }
    currentContext.funC = this;
    currentContext.funC(...arg || []);
    delete currentContext.funC;
}

const obj1 = {
    name:"Krishna"
}

const obj2 = {
    name:"Vinita"
}

const obj3 = {
  name: 'Eva',
};
function getDetails(age, place) {
    console.log(`Hello ${this.name} your age is ${age} and your are from ${place}`);
}

getDetails.myApply(obj1, [28, "lohaghat"]);
getDetails.myApply(obj2, [58, 'bangalore']);
getDetails.myApply(obj3, 5);
getDetails.myApply(obj2);