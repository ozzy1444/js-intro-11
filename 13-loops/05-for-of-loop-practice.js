console.log(`/n-----------Task 1--------------------------------`)
const names = ['John', 'Jane', 'Alex', 'Max', 'James']

// log each name
for(let name of names) {
    console.log(name);
}

console.log(`/n--------------------Task 2--------------------------------`)

//count how many names start with the name J 

let counterJ = 0;
for(let name of names) {
    if(name.toUpperCase().startsWith('J')) counterJ++;
}

console.log(counterJ); 


console.log(`/n--------------------Task 3--------------------------------`)
// count how many names have length of 4


nameLength = 0;
for(let i = 0; i < names.length; i++){
    if(names[i].length === 4) nameLength++
}

console.log(nameLength)

// for of loop ->
for (const name of names) {
    if(name.length === 4) nameLength++;
}


console.log(`/n--------------------Task 3--------------------------------`)
//count how many positive numbers you have in the array -> 4

const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

let posCount = 0;
for(let num of numbers){
    if(num > 0) posCount++
}
console.log(posCount); 

console.log(`/n--------------------Task 4--------------------------------`)
//count how many negative numbers you have in the array -> 3

let negCount = 0;
for(let num of numbers){
    if(num < 0) negCount++
}
console.log(negCount); 

console.log(`--------------------Task 5--------------------------------`)
//Count how many even numbers you have in the array -> 7

let evenNum = 0;
for(let Even of numbers){
    if(Even % 2 === 0) evenNum++
}

console.log(evenNum);

console.log(`--------------------Task 6--------------------------------`)
//Count how many positive-odd numbers you have in the array -> 2

let posOddCounter = 0;

for(let posOdd of numbers){
    if(posOdd % 2 !== 0 && posOdd > 0)posOddCounter++;
}
console.log(posOddCounter);

console.log(`--------------------Task 7--------------------------------`)
//Count how many positive-off numbers you have in the array -> 2