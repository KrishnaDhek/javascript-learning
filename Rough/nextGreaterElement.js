function nextGreaterEle(arr) {
    let arrResult = new Array(arr.length).fill(-1);
    const stack = [];


    for (let i = 0; i < arr.length; i++) {
       
        
        while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
            const index = stack.pop();
            arrResult[index] = arr[i];
        }
         stack.push(i);
    }

    return arrResult;
}


const arr = [2, 1, 7, 5, 6, 11, 3];
console.log(nextGreaterEle(arr));




