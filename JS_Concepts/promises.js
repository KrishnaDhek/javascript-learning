let stocks = {
  Fruits: ['mango', 'apple', 'strawberry', 'pineapple', 'lyche', 'jackfruit'],
  Flavour: ['chocolate', 'vanila', 'butterscotch', 'blueberry'],
  Holder: ['cone', 'cup'],
  Topping: ['sprinkle', 'raw-fruit'],
};

let shopOpen = false;
let order = (stocks) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shopOpen) {
        reject('Shop is close');
      } else {
        console.log('Taking order');
        resolve(stocks);
      }
    }, 2000);
  });
};

let production = (stocks) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('production started');
      resolve(stocks);
    }, 0);
  });
};

let selectFruit = (stocks) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let fruit = stocks.Fruits[3];
      console.log(`${fruit} was selected`);
      resolve(stocks);
    }, 2000);
  });
};

let selectedFlavour = (stocks) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let flavour = stocks.Flavour[1];
      console.log(`${flavour} was selected`);
      resolve(stocks);
    }, 1000);
  });
};

let startMachine = (stocks) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Start MAchine');
      resolve(stocks);
    }, 1000);
  });
};

let selectedHolder = (stocks) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let holder = stocks.Holder[0];
      console.log(`${holder} was selected`);
      resolve(stocks);
    }, 2000);
  });
};

let selectedTopping = (stocks) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let topping = stocks.Topping[0];
      console.log(`${topping} was selected`);
      resolve(stocks);
    }, 2000);
  });
};

order(stocks) //returns a promise
  .then(production) //promise chaining
  .then(selectFruit)
  .then(selectedFlavour)
  .then(startMachine)
  .then(selectedHolder)
  .then(selectedTopping)
  .catch((error) => {
    console.log('Error:', error);
  })
  .finally(() => {
    console.log('process completed');
  });

//Create a function delayedMessage that returns a Promise. This Promise should resolve with "Hello, Krishna!" after 2 seconds. Once resolved, log the message to the console using .then().

function delayedMessage(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (message) {
        resolve(message);
      } else {
        const error = new Error('message is empty');
        reject(error);
      }
    }, 2000);
  });
}

delayedMessage('')
  .then(function (message) {
    console.log(message);
  })
  .catch((error) => {
    console.log('Error: ', error.message);
  })
  .finally(() => {
    console.log('Task Completed');
  });

/**
   * Create a function fetchUserData(userId) that simulates fetching user data from a server.

If userId is valid (a number greater than 0), it should resolve with an object { id: userId, name: "Krishna" } after 2 seconds.
If userId is invalid (0 or negative), it should reject with an error message "Invalid user ID".
   */

const user = [
  {
    userId: -1232,
    userName: 'Krishna',
  },

  {
    userId: 1232,
    userName: 'Kunika',
  },
  {
    userId: 32,
    userName: 'Vinita',
  }
];
function fetchUserData(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.userId <= 0) {
        const error = new Error(`Invalid userId ${user.userId}`);
        reject(error);
      } else {
        resolve(user);
      }
    }, 2000);
  });
}

Promise.allSettled(user.map(fetchUserData))
  .then(result => {
    result.forEach((result) => {
      if (result.status === "fulfilled") {
      console.log("Valid user: ",result.value);
      } else {
        console.log("Error:", result.reason.message);
    }
  })
  })
  .finally(() => {
  console.log("Task Completed");
  })

/**
 * Write a function fetchPostData(postId) that simulates fetching a blog post from a server.

If postId is less than or equal to 0, reject with "Invalid postId" after 1 second.
Otherwise, resolve with an object like { postId, title: "Post Title", content: "Post Content" }.
Use .then(), .catch(), and .finally() to handle the response.
 */

const blogPost = [
  { postId: 1, title: 'Post title1', content: 'post content1' },
  { postId: 2, title: 'Post title2', content: 'post content2' },
  { postId: -3, title: 'Post title3', content: 'post content3' },
];

function fetchPostData(post) {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
     if (post.postId <= 0) {
       const error = new Error(`Invalid postId ${post.postId}`);
       reject(error);
     } else {
       resolve(post);
     }
   }, 1000);
  })
}

Promise.allSettled(blogPost.map(fetchPostData))
  .then((results) => {
    results.forEach((result) => {
      if (result.status === "fulfilled") {
      console.log(result.value);
      } else {
        console.log("error:", result.reason.message);
    }
  })
  })
  .finally(() => {
  console.log("Task Completed");
})




//Create a function getData that returns a Promise. The Promise should resolve after 2 seconds with a message
// "Data fetched successfully."

function getData(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (message === "") {
        reject(new Error(`Invalid data`));
      } else {
        resolve(message);
      }
    }, 2000);
  })
}

getData("Data fetched successfully")
  .then(function (message){
  console.log(message);
  })
  .catch((error) => {
  console.log("Error:",error.message);
  })


/**
 * Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL and returns
the parsed JSON response.
 */

async function fetchData(url) {
  try {
    if (!url) throw new Error("Invalid URl");

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Http Error: ${response.status} `)
    
    const data = await response.json();
    return data;

  }
  catch (error) {
    throw error;
  }
}

fetchData("https://jsonplaceholder.typicode.com/todos/1")
.then((data) => {
  console.log("Fetched data: ", data);
})
  .catch((error) => {
  console.log(error.message);
  })



/**
 * Create a function fetchUserDataAndPosts that takes a user ID and fetches the user details and their posts
using separate API calls. Use promise chaining to ensure the posts are retrieved only after the user details are
fetched. Return an object with user details and posts.
 */

function fetchUserData(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then(
    (response) => {
      if (!response.ok) {
        throw new Error('failed to fetch user data ');
      }
      return response.json();
    }
  );
}

function fetchUserPost(userId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error('failed to fetch user data');
    }
    return response.json();
  });
}

function fetchUserDataAndPosts(userId) {
  return fetchUserDataa(userId)
    .then(user => {
      return fetchUserPost(userId)
        .then(posts => {
          return { user, posts };
      })
    })
    .catch((error) => {
    console.log(error.message);
  })
}

fetchUserDataAndPosts(1).then(data => console.log(data));



//Promise APIs

const promise1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => {
  if (!response.ok) {
      throw new Error(`Http Error ${response.status} `)
    }
  return response.json()
});
const promise2 = fetch('https://jsonplaceholder.typicode.com/users/@').then(response => {
  if (!response.ok) {
    throw new Error(`Http Error ${response.status}`)
  }
  return response.json()
})

Promise.all([promise1, promise2])
  .then(result => console.log(result))
  .catch((error)=>{
  console.log("Error: ", error.message);
})


const promise1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(
  (response) => {
    if (!response.ok) {
      throw new Error(`Http Error ${response.status} `);
    }
    return response.json();
  }
);
const promise2 = fetch('https://jsonplaceholder.typicode.com/users/@').then(
  (response) => {
    if (!response.ok) {
      throw new Error(`Http Error ${response.status}`);
    }
    return response.json();
  }
);

Promise.allSettled([promise1, promise2])
  .then((result) => console.log(result))
  .catch((error) => {
    console.log('Error: ', error.message);
  });






const promise1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(
  (response) => {
    if (!response.ok) {
      throw new Error(`Http Error ${response.status} `);
    }
    return response.json();
  }
);
const promise2 = fetch('https://jsonplaceholder.typicode.com/users/@').then(
  (response) => {
    if (!response.ok) {
      throw new Error(`Http Error ${response.status}`);
    }
    return response.json();
  }
);

Promise.race([promise1, promise2])
  .then((result) => console.log(result))
  .catch((error) => {
    console.log('Error: ', error.message);
  });





const promise1 = fetch('https://jsonplaceholder.typicode.com/users/-10').then(
  (response) => {
    if (!response.ok) {
      throw new Error(`Http Error ${response.status} `);
    }
    return response.json();
  }
);
const promise2 = fetch('https://jsonplaceholder.typicode.com/users/@').then(
  (response) => {
    if (!response.ok) {
      throw new Error(`Http Error ${response.status}`);
    }
    return response.json();
  }
);

Promise.any([promise1, promise2])
  .then((result) => console.log(result))
  .catch((error) => {
    console.log('Error: ', error.message);
    console.log('Full Errors:', error.errors);
  });

async function fetchUserData(url) {
  try {
    const response =await fetch(url);
    if (!response.ok) {
      throw new Error(`Http Error ${response.status} `)
    }
    const data = await response.json();
    return data;
  }
  catch(error) {
    throw new Error(error.message || "Network Error")
  }
}


  fetchUserData('https://jsonplaceholder.typicode.com/users/1')
    .then((data) => console.log('User Data:', data))
    .catch((error) => console.log('Error:', error.message));

  fetchUserData('https://jsonplaceholder.typicode.com/invalid-url')
    .then((data) => console.log('User Data:', data))
    .catch((error) => console.log('Error:', error.message));



const pr1 = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve("P1 is successful");
  }, 3000);
})

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P2 is successful");
    reject("P2 is failed")
  }, 1000);
})

const pr3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 is successful")
  }, 2000);
})

// The Promise.all() method takes an array of promises and returns an array of their resolved values if all promises are fulfilled. 
// However, it is a "fail-fast" method, meaning that if any promise is rejected, it immediately rejects with that error, 
// without waiting for the remaining promises to settle.
Promise.all([pr1, pr2, pr3])
  .then((result => {
  console.log(result);
  }))
  .catch((error)=>{
  console.error("Error: ",error);
  })


function fetchUserAndPosts(userId) {
  const p1 = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch user details: ${response.status}`);
      }
      return response.json(); // Parse JSON
    }
  );

  const p2 = fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch user posts: ${response.status}`);
    }
    return response.json(); // Parse JSON
  });

  return Promise.all([p1, p2])
    .then(([user, posts]) => {
      return { user, posts }; // Return both user and posts in an object
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
}

// Call the function and log the result
fetchUserAndPosts(1).then((data) => console.log(data));
