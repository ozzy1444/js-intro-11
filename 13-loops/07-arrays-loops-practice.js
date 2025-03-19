const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];
// Find the sum of first 3 and last 3 elements -> 31

let sums = 0;
for(const num of nums.slice(0, 3)) {
    sums+= num;
}

for(const num of nums.slice(-3)) {
    sums+= num;
}

console.log(sums)

// other ways of solving this 

let sum4 = 0;
for(let i = 0; i <= 2; i++){
    sum4 += nums[i] + nums[nums.length - 1 - i]
}
console.log(sum4)


console.log('\n--------TASK-2--------\n');
const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];
// Find the sum of numbers that has even index -> 3 + 7 + 2 + 7 -> 19

let sum = 0; 
for(let i = 0; i < numbers.length; i += 2){
    sum += numbers[i];
}
console.log(sum)


console.log('\n--------TASK-3--------\n');
// Find the product of numbers that has odd index -> 3 + 7 + 2 + 7 -> 19

let product = 1; 
for(let i = 1; i < numbers.length; i += 2){
    product *= numbers[i];
}
console.log(product)

