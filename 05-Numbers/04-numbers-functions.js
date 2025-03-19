let num1 = 10.4551;
let num2 = 5;
let num3 = 10;

console.log(num1.toFixed(2)); // 10.46
console.log(num1.toPrecision(2)); // 10

console.log((22.25).toFixed(2)); //22.25 - .toFixed gives you the only the last 2 digits of a long number
console.log((2.225).toPrecision(2)); // 2.2 

console.log(num2 + num3);
console.log(num2.toString() + num3.toString()); // '510' (.toString converts numbers to strings)





let r1 = Number.isFinite(5); 

console.log(r1); //true 



console.log(Number.isFinite(5)); // true 
console.log(Number.isFinite(Infinity)); false
console.log(Number.isFinite('Hello')); false

// Intergers: Whole Numbers - 5, 10, 1000
// Floats/ Doubles: Decimal Numbers - 10.5, 27.9, 78.99

console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(10.5)); // false

// .isSafeInteger checks if the number is within the bigInt number, anything bigger isnt safe
console.log(Number.isSafeInteger(9007199254740991)); // true 
console.log(Number.isSafeInteger(9007199254740992)); // false - its bigger than the bigInt #

console.log(Number.parseInt('10') + 5); // 15 
console.log(Number.parseInt('10.99' + 5)); //15 
console.log(Number.parseFloat('10.5') + 5); // 15.5 

console.log(parseFloat('10.5') + 5); // 15.5

// .parsefloat handles decimals when the Int doesn't// you can write it without the Number.



