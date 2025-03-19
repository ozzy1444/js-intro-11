/*
Calculate the absolute difference between max and min of 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference. 
 
Examples: 
3, 5, 2     -> 3 
7, 3, 1    -> 6 
5, 5, 5     -> 0 
1, 10, 9    -> 9 
10, 1, 2    -> 9 

PSEUDO CODE

In Interviews pseudo code is like a step by step explanation of what I am doing 
in my code, during an interiew always do this and talk about what your going to do. 
It will hire your chances of getting HIRED !!!

1. Generate 3 random number 
2. Find Max and Min numbers among the random numbers 
3. Calculate and output man - min
*/

let r1 = Math.round(Math.random() * (10 - 1) +1)
let r2 = Math.round(Math.random() * (10 - 1) +1)
let r3 = Math.round(Math.random() * (10 - 1) +1)
console.log(r1);

let max = Math.max(r1,r2,r3);
let min = Math.min(r1,r2,r3);

//7, 5, 8 -> 3

let result = max - min;

console.log(result); 

let z1 = Math.round(Math.random() * (21 - 9) + 9);
let z2 = Math.round(Math.random() * (21 - 9) + 9);
let z3 = Math.round(Math.random() * (21 - 9) + 9);

console.log(z1, z2, z3); 

let max1 = Math.max(z1, z2, z3); 
let min1 = Math.min(z1, z2, z3); 

let result4 = max1 - min1;

console.log(result4); 