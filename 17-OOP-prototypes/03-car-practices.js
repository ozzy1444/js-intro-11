const Car = require("./prototypes/car");

const car1 = new Car('Honda', 'Civic', 2025, 50000);

console.log(car1); 

// create 3 car objects 
const car2 = new Car('Tesla', 'X', 2023, 80000);
const car3 = new Car('BMW', 'X7', 2022, 60000);
const car4 = new Car('Tesla', 'Y', 2020, 27000);

//log each car object to the console
console.log(car2)
console.log(car3)
console.log(car4)


// we are using the prototypes we made from file -> protopes -> car.js
car1.drive()
car1.brake()
console.log(`${car1.year} ${car1.make} ${car1.model} is ${car1.price}`)