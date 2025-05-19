Array.prototype.myForEach = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error(`${callback} is not a function`)
    }
    
    
    for (let i = 0; i < this.length; i++){
        if (i in this) {
            callback(this[i], i, this);
        }
    
    }
    
}

const arr = [3, 4, 5, 6, 78];
arr.myForEach((item, index, self)=> {
    console.log(item);
})