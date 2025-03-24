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


//Practice Questions

//1.Convert a Promise-based function to async/await

async function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(42), 1000);
  });
}


async function operation(){
    try {
        const value = await getNumber();
        console.log(value);
    } catch(error){
        console.log(error);
    }
}

operation();



//2.Fetch Data Using async/await
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}` )
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error: ", error.message);
    }
}


async function operation(url) {
    try {
        const data = await fetchData(url);
        console.log(data);
    } catch (error) {
        console.log("Error: ",error.message);
    }
}

operation('https://jsonplaceholder.typicode.com/todos/1');


//3.Delay Execution

async function delayedLog(message,delay) {
    return new Promise((resolve, reject) =>
    setTimeout(() => {
        resolve(message);
    }, delay))
}
async function test(message,delay) {
  const result= await delayedLog('Hello after 2 seconds', 2000);
console.log(result);
}

test();



//4.Simulating a Delayed API Response
async function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id:userId, name:"John Doe"})
        }, 1500);
    })
}

async function getUserInfo(userId) {
    const result = await fetchUserData(userId);
    console.log(result);
}
getUserInfo(1);