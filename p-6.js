function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

const input = [1, 2, 3, 4];
const output = sumArray(input);
console.log(output);
