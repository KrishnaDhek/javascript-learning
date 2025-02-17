function a() {
    var a = 10;
    function b() {
        return a;
    }

    return b;
}

var c = a();

console.log(c());


function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = createCounter();
increment();
increment();
increment();
