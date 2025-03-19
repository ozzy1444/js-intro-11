const numbers = [3, 6, 10, 4 ];

numbers.reduce()

//reduce() basically gives back a single single value 

// Find shortest fruit -> Kiwi
const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

let shortestFruit = fruits.reduce((acc, curr) => {
    if(acc.length < curr.length) return acc;
    return curr;
})
console.log(shortestFruit) // kiwi

