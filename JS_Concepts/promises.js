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
        reject("Shop is close")
      }else{
      console.log("Taking order");
      resolve(stocks);}
    }, 2000);
  });
}

let production = (stocks) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("production started");
      resolve(stocks);
    }, 0);
  })
}


let selectFruit = (stocks) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let fruit = stocks.Fruits[3];
      console.log(`${fruit} was selected`);
      resolve(stocks);
    }, 2000);
  });
}


let selectedFlavour = (stocks) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let flavour = stocks.Flavour[1];
      console.log(`${flavour} was selected`);
      resolve(stocks);
    }, 1000);
  })
}


let startMachine = (stocks) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Start MAchine');
      resolve(stocks);
    }, 1000);
  })
}

let selectedHolder = (stocks) => {
  return new Promise((resolve)=>{
  setTimeout(() => {
    let holder = stocks.Holder[0];
    console.log(`${holder} was selected`);
    resolve(stocks);
  }, 2000);
})
}

let selectedTopping = (stocks) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let topping = stocks.Topping[0];
      console.log(`${topping} was selected`);
      resolve(stocks);
    }, 2000);
  })
}


order(stocks)//returns a promise
  .then(production)//promise chaining
  .then(selectFruit)
  .then(selectedFlavour)
  .then(startMachine)
  .then(selectedHolder)
  .then(selectedTopping)
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("process completed");
  })



//Create a function delayedMessage that returns a Promise. This Promise should resolve with "Hello, Krishna!" after 2 seconds. Once resolved, log the message to the console using .then().
  
function delayedMessage(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (message) {
        resolve(message);
      }
      else {
        const error = new Error("message is empty")
        reject(error);
      }
      
    }, 2000);
  })

}

delayedMessage("")
  .then(function (message) {
    console.log(message);
  })
  .catch((error) => {
  console.log("Error: ",error.message);
  })
  .finally(() => {
    console.log("Task Completed");
  })