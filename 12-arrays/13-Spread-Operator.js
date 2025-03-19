const numbers = [1, 2, 3, 10, -7];

console.log(numbers); // [ 1, 2, 3, 10, -7 ]
console.log(...numbers); // 1 2 3 10 -7

const winter = ['Dec', 'Jan', 'Feb'];
const spring = ['Mar', 'Apr', "May"];
const summer = ['June', 'July', 'Aug'];
const fall = ['Sep', 'Oct', 'Nov']; 

const months = [...winter, ...spring, ...summer, ...fall]

console.log(months)

const nums = [10, 15, -7, 5, 20]

console.log(Math.max(...nums)); // 20
console.log(Math.min(...nums)); // -7
// without the ... it wont work because Math.Max doesnt take arrays 

