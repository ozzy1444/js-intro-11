const numbers = [5, 3, 2, 20];
// give an array that give 'even' or 'odd' for the given index of the element 


//old way of doing the task
const oddEven = [];
for(const num of numbers) {
    if(num % 2 === 0) oddEven.push('Even');
    else oddEven.push('Odd');
}
console.log(oddEven); 

const numbers = [5, 3, 2, 20];
// map() of doing this task
//numbers.map((num) => {
//    if(num % 2 === 0) return 'even';
//    return 'odd';
//}); 
//or with ternirary
const oddEven2 = numbers.map((num) => num % 2 === 0 ? 'even' : 'odd');

console.log(oddEven2)


const sentences = ['Good evening', 'I like arrays', 'It is Monday'];
// each sentence's first word -> ['Good', 'I', 'It'];

const firstWord = sentences.map((x) => {
    for(let i = 0; i <= sentences.length - 1; i++)
        return x.split(' ')[0]    
})
console.log(firstWord)

// another way to solve
//const firstWord2 = sentences.map((sen) => {
//    return sentences.slice(0, sen.indexOf(' '))
//})
//console.log(firstWord2)


const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];
// Create a new array storing the given salaries with 2 decimals
// [1000.23, 5234.35, 721.98, 3452.50]
const newSalaries = salaries.map((x) => {
    return x.toFixed(2);
})
console.log(newSalaries);

// or a shorter way 

console.log(salaries.map((x) => x.toFixed(2)))
