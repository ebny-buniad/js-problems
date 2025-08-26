function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
    .join(' '); 
}
const input = "hello world";
const output = capitalizeWords(input);
console.log(output); 
