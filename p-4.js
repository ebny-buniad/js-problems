function findMaxNumber(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

const input = [5, 1, 9, 3];
const output = findMaxNumber(input);
console.log(output);
