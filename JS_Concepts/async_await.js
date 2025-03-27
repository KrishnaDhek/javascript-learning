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
            if (userId <= 0) {
                reject(new Error("Invalid user"));
            } else {
                resolve({userId, name:"John Doe"})
            }
        }, 1500);
            
    })
}

async function getUserInfo(userId) {
    try {
        const result = await fetchUserData(userId);
    console.log(result);
    } catch (error) {
        console.log("Error: ",error.message);
   }
}
getUserInfo(1);
getUserInfo(-1);



//5.Fetch & Process API Data

async function  fetchToDo(url) {

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTPS Error Status ${response.status}`)
        } 
            const data = await response.json();
            return data.title;
        
    }
    
async function getTodo(url) {
    try {
        const result = await fetchToDo(url);
    console.log("Todo Title:",result);
    } catch (error) {
        console.log("Error: ",error.message);
    }
}

getTodo("https://jsonplaceholder.typicode.com/todos/1");
getTodo('https://jsonplaceholder.typicode.com/todos/2');
getTodo('https://jsonplaceholder.typicode.com/todos/-1');



//6.Fetch Todo #1 from  https://jsonplaceholder.typicode.com/todos/1

// Once it's fetched, fetch Todo #2 from https://jsonplaceholder.typicode.com/todos/2

// Print their titles in order.

async function fetchDataToDo(url) {
    console.log('Fetching Todo');
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTPs Error ${response.status}`)
        }
    
    const data = await response.json();
    return data;
}

async function  getDataTodo(url1,url2) {
    try {
        const result = await fetchDataToDo(url1);
        console.log("Todo:", result.title);
        const result1 = await fetchDataToDo(url2)
        console.log('Todo:', result1.title);
    } catch (error) {
        console.log("Error:",error.message);
        }
    }

getDataTodo(
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2'
);


//6.1 Fetch Todo #1 from  https://jsonplaceholder.typicode.com/todos/1

// Once it's fetched, fetch Todo #2 from https://jsonplaceholder.typicode.com/todos/2

//Using Promise.all();

async function  fetchDataToDo(url) {
    console.log(`Fetching Todo from ${url}`);
 
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTPs Error ${response.ok}`)
        }
        return await response.json();
        
}

async function getDataTodo(url1,url2) {
    try {
        const [result1, result2] = await Promise.all([fetchDataToDo(url1), fetchDataToDo(url2)]);
        console.log("Todo 1:", result1.title);
        console.log("Todo 2:", result2.title);
    }catch(error){
        console.log("Error:", error.message);
    }
}
getDataTodo(
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2'
);
