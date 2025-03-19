const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];
console.log('\n--------TASK-1--------\n');
// Find the sum of all numbers         -> 28
// Find the average of the numbers     -> 4

let sum = 0;
for(let i = 0; i <= numbers.length; i++){
    sum += i;
}
console.log(sum); 
console.log(sum / numbers.length)

// for of loop

for(const num of numbers) {
    sum += num;
}
console.log(sum);
console.log(sum / numbers.length)


console.log('\n--------TASK-2--------\n');

let product = 1;
for(let i = 3; i < numbers.length; i++){
    product *= numbers[i]
}
console.log(product);

// for of loop

for(const num of numbers.slice(3)){
    product *= num;
}
console.log(product);

console.log('\n--------TASK-3--------\n');

