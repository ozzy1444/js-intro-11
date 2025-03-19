const { getRandomNumber } = require('./../utils/MathHelper.js');


console.log('\n -------------TASK 1-----------\n')

let str1 = '5';
let str2 = '2'; 

let num1 = Number(str1);
let num2 = Number(str2);

let result1 = num1 + num2; 
let result2 = num1 * num2; 
let result3 = num1 / num2; 
let result4 = num1 - num2;
let result5 = num1 % num2;
let result6 = num1 ** num2;


console.log(`The sum of ${str1} and ${str2} is = ${result1}`);
console.log(`The product of ${str1} and ${str2} is = ${result2}`);
console.log(`The divsion of ${str1} and ${str2} is = ${result3}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${result4}`);
console.log(`The remainder of ${str1} and ${str2} is = ${result5}`)
console.log(`The exponentiation of ${str1} and ${str2} is = ${result6}`)


console.log('\n -------------TASK 2-----------\n')


let s1 = '200';
let s2 = '-50'; 

let nnew1 = Number(s1);
let nnew2 = Number(s2);

let max = Math.max(s1, s2); 
let min = Math.min(s1, s2); 
let aver = (nnew1 + nnew2) / 2; 
let abs = Math.abs(nnew1 - nnew2); 

console.log(`The greaterst value is = ${max}`);
console.log(`The smallest value is = ${min}`);
console.log(`The average is = ${aver}`);
console.log(`The absolute difference is = ${abs}`);



console.log('\n -------------TASK 3-----------\n')

let max1 = 50; 
let min1 = 1; 

let rand1 = Math.round(Math.random() * (max1 - min1) + 1); 
let rand2 = Math.round(Math.random() * (max1 - min1) + 1); 

console.log(rand1, rand2) 

let absolute = rand1 - rand1;

console.log(`The absolute difference between numbers is = ${absolute}`);

console.log('\n -------------TASK 4-----------\n')

let maxNum = 50
let minNum = 1

let random1 = Math.round(Math.random() * (maxNum - minNum) + minNum);
let random2 = Math.round(Math.random() * (maxNum - minNum) + minNum);
let random3 = Math.round(Math.random() * (maxNum - minNum) + minNum);
let random4 = Math.round(Math.random() * (maxNum - minNum) + minNum);
let random5 = Math.round(Math.random() * (maxNum - minNum) + minNum);

let maxVal = Math.max(random1, random2, random3, random4, random5);
let minVal = Math.min(random1, random2, random3, random4, random5);


console.log(`The max value = ${maxVal}`)
console.log(`The min value = ${minVal}`)

console.log('\n -------------TASK 5-----------\n')

let nMax1 = 100; 
let nMin1 = 50; 

let r1 = Math.round(Math.random() * (nMax1 - nMin1) + nMin1);
let r2 = Math.round(Math.random() * (nMax1 - nMin1) + nMin1);
let r3 = Math.round(Math.random() * (nMax1 - nMin1) + nMin1);


console.log(`The number 1 = ${r1}`);
console.log(`The number 2 = ${r2}`);
console.log(`The number 3 = ${r3}`);

let sum1 = r1 + r2 + r3; 

console.log(`The sum of numbers is = ${sum1}`)



console.log('\n -------------TASK 6-----------\n')



let z1 = Math.round(Math.random() * (100 - 1) + 1);
let z2 = Math.round(Math.random() * (100 - 1) + 1);
let z3 = Math.round(Math.random() * (100 - 1) + 1);

console.log((z1 > 25) && (z2 > 25) && (z3 > 25)); 



console.log('\n -------------TASK 7-----------\n')

let nameD = 'David'; 
let lengthName = nameD.length

console.log(`The length of the name is = ${lengthName}`);
console.log(`The first character in the name is = ${nameD[0]}`);
console.log(`The last character in the name is = ${nameD.slice(-1)}`)
console.log(`The first 3 characters in the name are = ${nameD.slice(0, 3)}`)
console.log(`The last 3 characters in the name are = ${nameD.slice(-3)}`)



