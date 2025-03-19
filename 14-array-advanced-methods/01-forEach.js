const numbers = [5, 7, 1, 3, 10];

// for...of loop
for(const number of numbers) {
    console.log(number)
}

// forEach() Method
numbers.forEach(function(x) {
    console.log(x);
});

const names = [ 'Mariia', 'Alex', 'John', 'Jane', 'Victoria' ];
// Print all the names that has 4 characters
names.forEach((x) =>{
    if(x.length === 4) console.log(x)
})


// Find sum of numbers: 11
// Find product of numbers: 30
// Create a new array which has all numbers miltiplied by 5: [ 25, 15, 10, 5 ]
const nums = [ 5, 3, 2, 1 ];
let sum = 0;
let product = 1;
let arr1 = [];

nums.forEach((num) => {
    sum += num;
    product += num;
    arr1.push(num * nums)
})

console.log(sum)
console.log(product)
console.log(arr1)
