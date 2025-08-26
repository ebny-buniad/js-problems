function removeDuplicates(arr) {
  return [...new Set(arr)];
}
const input = [1, 2, 2, 3, 4, 4];
const output = removeDuplicates(input);
console.log(output); 
