const names = ['Mariia', 'Alex', 'John', 'Jane', 'Victoria']


const names4 = names.filter((x) => {
    return x.length === 4
})

console.log(names4); 



// How many names has 'a' or 'A' 
names.filter((name) => {
    if(name.toLowerCase().includes('a')) return true;
    return false
})

// or 

const namesWithA = names.filter((name) => {
    return name.toLowerCase().includes('a');
})

console.log(namesWithA.length)


// Find all the numbers that are 50 or more -> [100, 77, 50, 65]
const numbers = [10, 5, 100, 77, 50, 65, 0];

const numsOver50 = numbers.filter((nums) => {
    return nums >= 50;
})

console.log(numsOver50);


// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2

const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];

console.log(fruits.filter((x) => x.toLowerCase().includes('apple')));
console.log(fruits.filter((x) => x.toLowerCase().includes('a')).length);
console.log(fruits.filter((x) => x.toLowerCase().includes('i')).length);


//Find the typeof that are numbers
const newArr = [ 5, 2, 'Hello', 12.5].filter((x) => {
    return typeof x === 'number';
})
console.log(newArr)
