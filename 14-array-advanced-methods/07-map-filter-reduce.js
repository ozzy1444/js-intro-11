const numbers = [-2, -5, 3, 0, 5, 8, 10];
// count even and positive numbers -> 2


let evenPosNum = 0; 
numbers.forEach((x) => {
    if(x > 0 && x % 2 === 0) evenPosNum++;
})
console.log(evenPosNum) // 2

// reduce() way 
let countEvenPos = numbers.reduce((acc, curr) =>{
    if(curr > 0 && curr % 2 === 0) return acc + 1;
    return acc;
}, 0)
console.log(countEvenPos)




// sum of numbers of inner arrays : [6, 35, 300]
const nums = [
    [1, 2, 3],
    [5, 10, 20],
    [100, 200]
];

  const result = nums.map((x) => {
    return x.reduce((acc, curr) => {
        return acc + curr;
    }, 0)
  })
  console.log(result)


  // Find all the words that has 5 letters: [ 'HELLO, 'APPLE' ]
  const words = [ 'hello', 'Tuesday', 'HEYY', 'Apple' ];
let words5Upper = words.filter(x => (x.length === 5).map(x => x.toUpperCase()))
console.log(words5Upper)

// for of loop way of solving
const results = [];
for(const word of words){
    if(word.length === 5) results.push(word.toUpperCase())
}
console.log(results); 

//reduce() way 
const result3 = words.reduce((acc, curr) => {
    if(curr.length === 5) return acc.push(curr.toUpperCase());
    return acc;
}, []) // error that .push is not a function 
console.log(result3)