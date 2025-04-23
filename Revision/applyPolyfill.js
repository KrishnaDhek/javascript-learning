//Polyfill for apply() - takes two arguments current context and array or undefined 

Function.prototype.myApply = function (currentContext, arg) {
  if (typeof this !== 'function') {
    //check if the current content is a  function
    throw new Error(`${this} must be a function`);
  }

  if (arg !== null && !Array.isArray(arg)) {
    // check if second arg is either an array or undefined
    throw new TypeError(`Second argument must be array or undefined `);
  }

  // Temporarily assign the function to the context
  currentContext.funC = this;

  // Call the function using spread syntax. If arg is undefined, fall back to an empty array
  currentContext.funC(...(arg || []));

  // Clean up the temporary property
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
getDetails.myApply(obj3, null);
getDetails.myApply(obj2);