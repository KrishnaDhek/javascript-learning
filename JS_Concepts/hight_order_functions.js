//Count occurrences of elements


const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

console.log(countFrequency(words));

function countFrequency(word) {
    let map = new Map();
    let count = 0;
    for (w of word) {
        if (map.has(w)) {
            map.set(w, map.get(w)+1)
        }
        else {
            map.set(w, 1);
        }
    }
    return map;
}

//Count occurrences of elements using reduce method