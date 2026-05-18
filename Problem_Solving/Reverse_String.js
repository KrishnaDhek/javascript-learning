//Write a function that reverses a string. The input string is given as an array of characters s.

//You must do this by modifying the input array in -place with O(1) extra memory.


const s = ['h', 'e', 'l', 'l', 'o'];

const result = function (s) {
    let i = 0; let j = s.length - 1;

    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
}
result(s);
console.log(s);