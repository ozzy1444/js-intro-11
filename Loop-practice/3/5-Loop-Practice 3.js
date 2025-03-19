
/*
Write a function named as firstPos() which takes an 
array as an argument and returns the first positive 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one positive element in 
the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8])  -> 3
firstPos([-2, 0, -7, 10, -5])  -> 10
firstPos([1, 2, 3, -2]) -> 1
*/

let arr = [0, 3, -9,  5, 8];
function firstPos(arr) {
    return (arr.find((x) => x > 0));
}
console.log(firstPos(arr)); // 3

// bilals way of solving 

const firstPos = arr => {
    for(const ele of arr){
        if(ele > 0) return ele
    }
}

/*
Write a function named as lastNeg() which takes an 
array as an argument and returns the last negative 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one negative element in 
the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8])  -> -9
lastNeg([-2, 0, -7, 10, -5])  -> -5
lastNeg([1, 2, 3, -2])                         -> -2
*/

// .findLast() way of solving 
let arr2 = [-2, 0, -7, 10, -5];
function lastNeg(arr2) {
    return (arr2.findLast((x) => x < 0));
}
console.log(lastNeg(arr2)); // -5

// .filter() way of solving 
const lastNeg = arr => arr.filter(ele => ele < 0).at(-1);

// loop way of solving 
const lastNeg = arr => {
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] < 0) return arr[i];
    }
}
console.log(lastNeg([-2, 0, -7, 10, -5]))

/*
Write a function named as firstLongest() which takes 
an array as an argument and returns the longest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the longest count of 
characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])  -> 
"yellow"
firstLongest(["Apple", "Banana", "Orange"])  -> 
"Banana"
firstLongest(["purple", "yellow", "orange"])  -> 
"purple"
*/

// bilals way of solving 
const firstLongest = arr => {
    let longest = arr[0]

    for(const ele of arr) {
        if(ele.length > longest.length) longest = ele
    }
    return longest;
}


let arr3 = ["Apple", "Banana", "Orange"]
// best way of using reduce()
const firstLongest2 = arr => arr.reduce((longest, ele) => ele.length > longest.length ? ele : longest); 

/*
Write a function named as min() which takes an array 
as an argument and returns the greatest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])  -> 0
min([-2, 0, -7, 10, -5])  -> -7
min([1, 2, 3, 15])                 -> 1
*/

//bilals way of solving 
const min = arr => {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min) min = arr[i]
    }
    return min
}
console.log(min2([-1, 0, 3, 5,  8]))

// using .sort()
const min2 = arr => arr.sort((a, b) => a - b)[0]
console.log(min2([-1, 0, 3, 5,  8]))

//using Math.Min
let arr4 = [1, 2, 3, 4, 5]
const min3 = arr => Math.min(...arr4)


// My way of solving but im getting NaN
//const nums = [0, 3,  5, 8];
//function min(arr){
//   return Math.min(nums);
//}
//console.log(min(nums))





const commonElements = (arr1, arr2) => {
    let result = [];

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]) {
                result.push(arr1[i])
                break;
        }
    }
}
    return result
}

console.log(commonElements([10, 20, 30, 50, 70], [20, 50, 70])) // [ 20, 50, 70 ]

// Easier way of solving and simpler
const commonElements2 = (arr1, arr2) => arr1.filter(x => arr2.includes(x))
console.log(commonElements2([10, 20, 30, 50, 70], [20, 50, 70]))