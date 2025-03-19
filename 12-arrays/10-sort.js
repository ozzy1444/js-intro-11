const names = ['alex', 'Adam', 'Jane', 'John', 'alexander']

names.sort(); // It sorts alphabelitaclly but based on the ASCII table and Capital 
// Letters always come before lower case

console.log(names); // [ 'Adam', 'Jane', 'John', 'alex', 'alexander' ]

const numbers = [1, 40, 15, 20, 2]; 
numbers.sort();

console.log(numbers); // even with numbers it still does it based on ASCI, it puts
// puts numbers togther [ 1, 15, 2, 20, 40 ]

//correct way
numbers.sort((a, b) => a - b);

console.log(numbers); // [ 1, 2, 15, 20, 40 ]

// or regular function expression and decending order


numbers.sort(function(a, b){
    return b - a
});

console.log(numbers); // [ 40, 20, 15, 2, 1 ]
