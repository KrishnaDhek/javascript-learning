//Polyfill for forEach() - forEach() iterates over the array printing all the items inside it, it takes an callback function 

Array.prototype.myForEach = function (callback) { //adding custom forEach method to the array to make it available to every function
    if (typeof callback !== 'function') { //edge case to verify that callback is indeed a function
        throw new Error(
          `Callback is not a function. Received :${callback} `
        );
    }
    for (let i = 0; i < this.length; i++){ //iterating over the current context of array
        callback(this[i], i, this); //returning the item, its index and the array itself
    }
}

const myArray = [3, 4, 5, 6, 7, 8];
 myArray.myForEach((item,index,self) => {
   console.log(`the item is ${item} at index ${index} for the array ${self}`);
})

const arr = [9, 8, 7, 67];
arr.myForEach();