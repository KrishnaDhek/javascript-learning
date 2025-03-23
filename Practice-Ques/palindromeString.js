// Write a function to check if a string is a palindrome (reads the same forward and backward).

function isPalindrome(str) {
    let i = 0; let j = str.length - 1;

    while (i <= j) {
        if (str[i] != str[j]) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
}


console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

