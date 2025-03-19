const nums = [-1, 1, 3, 0, 2, 6, 8];

// please find the first even number from the array 

// .Find() will give you the first element that is true based on your conidition 
let firstEven = nums.find((x) => x % 2 === 0); // 0

console.log(firstEven); 

//.findIndex() just gives you the location of the index 
let firstEvenIndex = nums.findIndex((x) => x % 2 === 0); // 3

console.log(firstEvenIndex); 



// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv

const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];

console.log(cities.find((city) => city.length === 4));
console.log(cities.findLast((city) => city.length === 6));
console.log(cities.findIndex((city) => city === 'LA'));
console.log(cities.find((city) => city.toLowerCase().includes('i')));
console.log(cities.findLast((city) => city.length === 4));





