const names = ['Alex', 'John', 'Jane'];

let namesStr = names.toString(); 
let namesStr2 = names.join(); 
let namesStr3 = names.join('-'); 

/* .join() converts an array into a string. .join() is like .toString but it can take an argument and seperate 
them by whatever you want for example: "-", "/", "|" but default is ","
*/
console.log(namesStr); // Alex,John,Jane
console.log(namesStr2);  // Alex,John,Jane
console.log(namesStr3); // Alex-John-Jane

const date = [2025, 2, 23];
let date2 = date.join('/');

console.log(date2); // 2025/2/23