Function.prototype.myCall = function (currentContext,...args) {
    if (typeof this !== 'function') {
        throw new Error(`${this} must be a function`);
    }
    currentContext.fun = this;
    currentContext.fun(...args);
    delete currentContext.fun;
}

const obj1 = {
    name: 'krishna',
    getDetails: getDetails
}
const obj2 = {
    name: "vinita"
}

function getDetails(age) {
    console.log(`hello ${this.name} your age is ${age}`);
}

getDetails.myCall(obj1, 2);
getDetails.myCall(obj2, 25);