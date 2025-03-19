/* Task 01
English exam
Passing score is 60 or above

We will write a program to check if we pass the exam or failed.

60 or above -> PASS
else -> FAIL
*/

let examScore = 60;

if(examScore >= 60) {
    console.log('PASS');
}
else {
    console.log('FAIL')
}

//short omitting curly braces - one statement 
if (examScore < 60) console.log('FAIL');
    else console.log('PASS');


/* Task 02
Retirement age is 65

We will write a program to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET RETIRED
else -> YOU CANNOT GET RETIRED!!!
*/

let retireAge = 60;

if(retireAge >= 65) {
    console.log('YOU CAN GET RETIRED')
}
else {
    console.log('YOU CANNOT GET RETIRED')
}


/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
1 January
.
.
12 December

Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/

let month = Math.round(Math.random() * (12 - 1)) + 1;


if(month === 12 || month === 1 || month === 2) {
    console.log('Winter')
}
else if(month === 3 || month === 4 || month === 5) {
    console.log('Spring')
}
else if(month === 6 || month ===  7 || month === 8) {
    console.log('Summer')
}
else {
    console.log('Fall')
}


// Practice, assume I am a phone store that has iphones and samsung and a customer is making an online order
let brand = 'Samsung';
let price = 0;
let ssd = 128;
let color = 'Black';

if(brand === 'Iphone') {
    price += 1000;  
    if(ssd === 16) price += 100;
    else if(ssd === 32) price += 150;
    else if(ssd === 64) price += 250;
    else if(ssd === 128) price += 400;
    else if(ssd === 256) price += 500 ;

    if(color !== 'White') price += 100;
}
else {
    price += 750;
    if(ssd === 16) price += 100;
    else if(ssd === 32) price += 150;
    else if(ssd === 64) price += 250;
    else if(ssd === 128) price += 300;
    else if(ssd === 256) price += 400 ;

    if(color !== 'White' && color !== 'Black') price += 50;
}
console.log(`Your custom ${brand} with ${ssd} GB and ${color} is $${price}`); //Your custom Samsung with 128 GB and Black is $1050


// Practice below with switch statements
const date = new Date();

console.log(date.getFullYear()); // 2025
console.log(date.getDay()); // day of the week
console.log(date.getHours()); // current hour
console.log(date.getMinutes()); // current min


let dayOfTheWeek = date.getDay()

if(dayOfTheWeek === 0 || dayOfTheWeek === 6) {
    console.log('Weekend')
} 
else {
    console.log('Weekday')
}

// switch method 
switch(dayOfTheWeek) {
    case 0:
    case 6:
        console.log('Weekend')
        break;
    default:
        console.log('Weekday') 
}

//ternary method 
let result = dayOfTheWeek === 0 || dayOfTheWeek === 6 ? 'Weekend' : 'Weekday'; 
console.log(result)


/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/
//another way 
function divisable5(number) {
    if(number % 5 === 0) return true
    return false
}
console.log(divisable5(7)); 


/*
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
startE('John') -> false
*/
function nameE(name) {
    if(name[0] === 'E' || name[0] === 'e')
    return true
    return false
}

function nameE(name) {
    if(name[0] === 'E' || name[0] === 'e') 
        return true
else {
    return false
}
}
console.log(nameE('Emily')); 


/* INTERVIEW QUESTION*************************************************************************************
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisible by 5 -> return 'foo'
if the given number is divisible by 7 -> return 'bar'
if the given number is divisible both by 5 and 7 -> return 'foobar'
if the numbers is not divisible by 5 or 7 -> return the same number back

fooBar(2)   -> 2
fooBar(3)   -> 3
fooBar(5)   -> 'foo'
fooBar(10)  -> 'foo'
fooBar(14)  -> 'bar'
forBar(0)   -> 'foobar'
fooBar(35)  -> 'foobar'
fooBar(70)  -> 'foobar'
*/
function foobar(number) {
    if(number % 5 === 0) {
        return 'foo'

}   else if(number % 7 === 0) {
    return 'Bar'

}   else if(number % 5 === 0 && number % 7 === 0) {
    return 'foorBar' 
        
}
    return number 
}

console.log(foobar(14))

//SIMPLIFIED WAY THAT LOOKS SLIMMER WITHOUT THE '{}'
function foobar(number) {
    if(number % 5 === 0) return 'foo'
    else if(number % 7 === 0) 
        return 'Bar'
    else if(number % 5 === 0 && number % 7 === 0) 
        return 'foorBar' 
    return number 
}

console.log(foobar(14))

