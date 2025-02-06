

let lengthOfLongestSubstring = function(s) {
  const set = new Set();
  let i = 0;
  let j = 0;
  let len = 0;

  while (j < s.length) {
    if (!set.has(s.charAt(j))) {
      set.add(s.charAt(j));
      j++;
      len = Math.max(len, set.size);
    } else {
      set.delete(s.charAt(i));
      i++;
    }
  }
  return len;
};


let str = "abcabcbb";
console.log("Length of Longest Substring is: "+lengthOfLongestSubstring(str));

