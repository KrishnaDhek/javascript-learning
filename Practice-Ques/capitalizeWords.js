const words = ['hello', 'world', 'javaScript'];
const result = words.map(word=> word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
console.log(result);
