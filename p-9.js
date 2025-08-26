function factorial(n) {
  if (n < 0) return null;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

const input = 5;
const output = factorial(input);
console.log(output);
