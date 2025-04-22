//Polyfill for find() :find() is an array method that returns the first value that satisfies the condition

Array.prototype.myFind = function (callback) {
    if (typeof callback !== 'function') {
        throw Error(`Callback must be a function. Received ${callback}`);
    }

    for (let i = 0; i < this.length; i++){
        if(this.hasOwnProperty(i)){
        if (callback(this[i],i,this)) {
            return this[i];
        }}
    }
    return undefined;
}
const arr = [4, 5, 6, 7, 8];
const ans = arr.myFind((i) =>{
    return i % 5 != 0;
})
console.log(ans);