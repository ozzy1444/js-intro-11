// when clicking . the one in the blue boxes 
// are properties and purple boxes are functions

//Properties 
let pi = Math.PI;

console.log(pi); 

console.log(Number.isFinite(Math.pi));

// Methods
console.log(Math.abs(5)) // 5
console.log(Math.abs(-5)) // 5

//.abs gives you an absoulte number, it will never give you negative

let a1 = Math.abs(3 - 5) - 3;
console.log(a1); -1

// ceil(), floor(), trunc(), round() Methods
console.log(Math.trunc(10.99)) // 10 
console.log(Math.trunc(10.01)) // 10

console.log(Math.round(10.49)) // 10
console.log(Math.round(10.51)) // 11

console.log(Math.ceil(10.000000001)); 11 // .ceil always rounds up to the next number 

console.log(Math.floor(10.99999999)); 10 // .floor always rounds down to the next number 


// pow() Methods
console.log(Math.pow(2, 3)); // 2 ** 3 basically answer-> 8
console.log(Math.pow(5, 2)); // 25
console.log(Math.pow(5)); // NaN always provide 2 numbers with this method


// square root .sqrt() Method
console.log(Math.sqrt(64)); // 8 basically the oposite of power**
console.log(Math.sqrt(25)); // 5

console.log(Math.sqrt(5)); //2.2385909
console.log(Math.sqrt(5).toFixed(1)); //2.2 (toFixed only shows the amount of decimals you put in the ())

// max(), min() Methods
console.log(Math.max(5, 3, 10)); // 10 always give you the max number 
console.log(Math.max(5, 3,)); // 5 always give you the max number 

console.log(Math.min(1.57859, 1.7888)); // 1.57859
