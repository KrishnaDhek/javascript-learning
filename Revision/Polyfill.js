//polyfill for map()

Array.prototype.myMap = function (cb) {
    const arr = [];
    for (let i = 0; i < this.length; i++){
        const result = cb(this[i], i, this);
        arr.push(result);
    }
    return arr;
}

const nums = [34, 2, 55, 75, 87, 91, 32];
const ans = nums.myMap((i) => {
  return  i * 5;

})
console.log(ans);

//polyfill for reduce()

Array.prototype.myReduce = function (cb,cVal) {
    let acc = cVal !== undefined ? cVal : this[0];
    let index = cVal !== undefined ? 0 : 1;
    for (let i = index; i < this.length; i++){
        acc = cb(acc, this[i], i, this);
    }
    return acc;
}

const nums = [34, 2, 55, 75, 87, 91, 32];
const ans = nums.myReduce((acc, val) => {
  return acc + val;
}, 6);
console.log(ans);

//polyfill for filter()

Array.prototype.myFilter = function (cb) {
    const arr = []; 
    for (let i = 0; i < this.length; i++){
        if (cb(this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}
const nums = [34, 2, 55, 75, 87, 91, 32];
const ans = nums.myFilter((n) => {
  return n>50;
});
console.log(ans);


//polyfill for find()

Array.prototype.myFind =function(cb) {
    
    for (let i = 0; i < this.length; i++){
        if (cb(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}


const nums = [34, 2, 55, 75, 87, 91, 32];
const ans = nums.myFind((n) => {
  return n<50;
});
console.log(ans);


//polyfill for some()

Array.prototype.mySome = function (cb) {
    for (let i = 0; i < this.length; i++){
        if (i in this && cb(this[i], i, this)) {
            return true;
        }
    }
    return false;
}

const nums = [34, 2, 55, 75, 87, 91, 32];
const ans = nums.mySome((n) => {
  return n < -50;
});
console.log(ans);


//polyfill for every()

Array.prototype.myEvery = function (cb) {
    for (let i = 0; i < this.length; i++){
        if (i in this && !cb(this[i], i, this)) {
            return false;
        }
    }
    return true;
}


const nums = [34, , , ,  2, 55, 75, 87, 91, 32];
const ans = nums.myEvery((n) => {
  return n >10;
});
console.log(ans);




//polyfill for call()
Function.prototype.myCall = function (item, ...args) {
    if (typeof this !== 'function') {
        throw new Error(`${this} must be a function`);
    }

    const val = Symbol();
    item[val] = this;
    item[val](...args);
    delete item[val];

}


const obj1 = {
  fName: 'Krishna',
  lName: 'Dhek',
};

const obj2 = {
  fName: 'Kr',
  lName: 'D',
};

function testMessage(place) {
  console.log(`Hello ${this.fName} ${this.lName} from ${place} `);
}

testMessage.myCall(obj1, 'Bangalore');
testMessage.myCall(obj2, 'Lgt');

