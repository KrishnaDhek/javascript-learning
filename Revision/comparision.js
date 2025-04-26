//Abstrat vs strict equality

console.log([] == []);       // false, pointer to different mempry location
console.log([] === []);      // false, pointer to different mempry location
console.log([] == ![]);      // true, pointer to different mempry location


console.log("0" == 0);       // ?
console.log("0" === 0);      // ?
console.log(false == "false"); // ?
console.log(false === "false"); // ?
