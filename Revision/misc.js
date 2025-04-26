//var,let, const

let a = 50;
function test() {
  var a = 10; 
  let b = 50;
  if (true) {
    let a = 40;
    var b = 60; //A variable declared with let cannot be redeclared with var in the same scope — doing so causes a SyntaxError.
    console.log(b);
  }
}
test();