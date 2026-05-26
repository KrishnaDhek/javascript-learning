function countDistinctWays(n) {
  // Handle base cases
  if (n === 1) return 1;
  if (n === 2) return 2;

  let a = 1,
    b = 2,
    c = 0;

  let i = 3;

  while (i <= n) {
    c = a + b;
    a = b;
    b = c;
    i++;
  }

  return c;
}

let n = 9;
console.log(countDistinctWays(n));
