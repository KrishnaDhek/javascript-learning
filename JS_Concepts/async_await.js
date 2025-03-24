//async fucntions always returns a Promise, if we return a value from async fun it will wrap that value inside the promise and return 
//async and await are used to handle promises
//await can be only used inside the async function

async function asyncTest(delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            reject("Invalid Input")
        } else {
            setTimeout(() => {
                resolve("Data Processing")
            }, delay);
        }
        
    })
}
async function test() {
    try {
        const result = await asyncTest(1000);
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

test();