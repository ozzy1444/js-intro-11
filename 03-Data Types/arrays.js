const favMovies = ['Matrix', 'Avengers', 'Fast and Furios']

console.log(favMovies)

console.log(favMovies[0]); 


const cities =['Rome', 'Berlin']

console.log(cities.length); // prints 2 

// If I want to change Berlin to Chicago do the following to update an existing element 
cities[1] = 'Chicago'

console.log(cities); // prints [Rome, Chicago]

// How to add new elements 
cities[2] = 'Miami'; 
cities.push('Miami') // This is the preferred way to add a new element to an existing array (Use the .push) .push already adds the element to the end. 

console.log(cities); // prints [Rome, Chicago, Miami]

const ids = [100, 101, 102, 103]; 

let firstElement = ids[0]; // when assigning a variable to the first element, using [0] is fine and will always works
let lastElement = ids[3];  // when assigning a variable to the last element, do not use the specific number ie[3], because when we add elements that changes, so always use [ids.length -1]. 

console.log(firstElement); 
console.log(lastElement);