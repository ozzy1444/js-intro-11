// output the numbers from 100 to 0 (both inclusive) -> 100 99 98 97 ...0

for(let i = 100; i >= 0; i--){
    console.log(i); 
}


//Output all the even numbers from 0 to 50

for(let i = 0; i <= 50; i++) {
    if(i % 2 === 0) console.log(i)
}


// output all the numbers divisable by 5 from 0 to 50
for(let i = 0; i <= 50; i++){
    if(i % 5 === 0) console.log(i)
}

sum = 0;
for(let i = 1; i <= 5; i++){
    sum += i;
}

console.log(sum);


// find sum of the numbers from 10 to 15 
let sum1 = 0;
for(let i = 10; i <= 15; i++) {
    sum1 += i;
}

console.log(sum1); 


// find the product of all the numbers from 1 to 6 -> 720
let prod = 1; 
for(let i = 1; i <= 6; i++) {
    prod *= i;
}

console.log(prod); 


// output each character from Techglobal school -> T e c h g l ....
let str = 'TechGlobal School';

for(let i = 0; i <= str.length - 1; i++) {
    console.log(str[i])
}

// or 

for(let i = 0; i < str.length; i++) {
    console.log(str[i])
}

//count how many 'a's we have in the word 'banana' ->
let fruit = 'Banana';
let counterA = 0;

for(let i = 0; i < fruit.length; i++){
    if(fruit[i] === 'a') counterA++;
}

console.log(counterA); 



//output all the odd numbers from 1 to random number between (10 - 20)

/*
starts: 1
end: randomNumber
update: ++
*/

const { getRandomNumber } = require('./../utils/MathHelper'); 

let ran = getRandomNumber(10, 20); 
console.log(ran); 

for(let i = 1; i <= ran; i++){
    if(i % 2 !== 0) console.log(i)
}



//Generate a random number bt 1 to 10 (both inclusive
//Find the product of all the numbers starting from 1 to randomly generated random
const { getRandomNumber } = require('./../utils/MathHelper'); 

let ran1 = getRandomNumber(1, 10);
console.log(ran1);
let product = 1; 

for(let i = 1; i <= ran1; i++){
    product *= i;
}

console.log(product);


/*
Print all the numbers between 2 random numbers in the range 
of 1 to 10 (both inclusive) in ascending order

ran1 ran2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5

start: Min of ranNum & ranNum2
end: Max of ranNum & ranNum2 
*/

const { getRandomNumber } = require('./../utils/MathHelper'); 

let ranNum = getRandomNumber(1, 10);
let ranNum2 = getRandomNumber(1, 10);

console.log(ranNum)
console.log(ranNum2)

let min = Math.min(ranNum, ranNum2)
let max = Math.max(ranNum, ranNum2)

for(let i = min; i <= max; i++){
    console.log(i)
}

//count how many even numbers 
const numbers = [2, 6, 3, -1, 10, 8];

let countE = 0;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0) countE++;
}

console.log(countE);