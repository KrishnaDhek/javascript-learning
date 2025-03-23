console.log(firstUniqueChar('swiss')); // Output: "w"
console.log(firstUniqueChar('racecar')); // Output: "e"
console.log(firstUniqueChar('aabbcc')); // Output: null

function firstUniqueChar(str) {
  const map = new Map();

  for (let char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let i of str) {
    if (map.get(i) === 1) return i;
  }

  return null;
}
