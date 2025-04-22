//Polyfill for call() : call() method is a function that allows to call a function with a specified this context and allows to pass arguments to the function individually

Function.prototype.myCall = function(currentContext, ...args){
    if (typeof this !=='function') {
        throw new Error(` ${this} must be a function`);
    }

    //set the current context to the function
    currentContext.funC = this;

    //call the function with the passed argument
    currentContext.funC(...args);

    //delete the funC from the currentContext to ensure we do not add funC permanently to currentContext
    delete currentContext.funC;
}

const obj1 = {
    name: "Krishna",
    getDetails:getDetails,
    
}

const obj2 = {
    name:"Vinita",
}

const obj3 = {
  name: 'Eva',
};

function getDetails(age) {
    console.log(`hello! ${this.name} your age is ${age}`);
}

getDetails.myCall(obj1, 58);
getDetails.myCall(obj2, 28);
getDetails.myCall(obj3, 5);