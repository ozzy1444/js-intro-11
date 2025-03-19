// create a car class
// And a constructor which takes parameters: make, model, year, price
// Add 2 methods: drive, brakes 

class Car {
    constructor(make, model, year, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
    }
    drive() {
        console.log(`${this.make} ${this.model} drives !`)
    }
    brake() {
        console.log(`${this.make} ${this.model} brakes !`)
    }
}

module.exports = Car;

