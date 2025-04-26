//Abstrat vs strict equality

console.log([] == []);       // false, pointer to different mempry location
console.log([] === []);      // false, pointer to different mempry location
console.log([] == ![]);      // true, pointer to different mempry location


console.log("0" == 0);       // ?
console.log("0" === 0);      // ?
console.log(false == "false"); // ?
console.log(false === "false"); // ?


console.log(5 + "5"); // ? 55
console.log("5" - 3); // ?2
console.log("5" * 3); // ?15
console.log("5" / 2); // ?2
console.log("5" % 2); // ?1
console.log("10" + 5 - 2); // ?13
console.log("1" + 1 + 1); // ?12
console.log(1 + 1 + "1"); // ?21
console.log("3" + 3 * 3); // ?39
console.log(5 + "10" / 2); // ?10


