/*
Task01

Requirement:
Assume you are given a number between 1 and 100 
(both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

Test data 1: 34
Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter

Test data 2: 76
Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/

let num = 49
if(num <= 25) {
    console.log(`${num} is in the 1st quarter`);
    console.log(`${num} is in the first half`);
}else if (num <= 50) {
    console.log(`${num} is in the 2nd quarter`);
    console.log(`${num} is in the first half`);
}else if (num <= 75) {
    console.log(`${num} is in the 3rd quarter`);
    console.log(`${num} is in the second half`);
}else{
    console.log(`${num} is in the 4th quarter`);
    console.log(`${num} is in the second half`);
}

// Switch statement way of doing the same thing below 
switch(true){
    case num >= 1 && num <= 25:
        console.log(`${num} is in the 1st quarter`);
        console.log(`${num} is in the first half`);
        break;
    case num >= 26 && num <= 50:
        console.log(`${num} is in the 1st quarter`);
        console.log(`${num} is in the first half`);
        break;
    case num >= 51 && num <= 75:
        console.log(`${num} is in the 1st quarter`);
        console.log(`${num} is in the second half`);
        break;
    case num >= 76 && num <= 100:
        console.log(`${num} is in the 1st quarter`);
        console.log(`${num} is in the second half`);
      default :
        console.log('This is out of scope')
}

/*
Task02
Requirement:
Assume you are given 3 numbers between 1 and 100
(both 1 and 100 are included).
Print true if they are all even numbers.
Otherwise, print false
Test data 1: 2, 4, 6
Expected result 1: true
Test data 2: 68, 44, 2
Expected result 2: true
Test data 3: 10, 20, 25
Expected result 3: false
Test data 4: 51, 67, 99
Expected result 4: false
const num1 = 2;
const num2 = 4;
const num3 = 6;
*/

let num1 = 2
let num2 = 4
let num3 = 6

if(num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0){
    console.log(true)
} else {
    console.log(false)
}

//Another way to solve, The better way to solve !!!
console.log(num1 % 2 === 0 && num2 % 2 === 0 && num3 % 2 === 0)


/*
Task03
Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace 
or special.

Test data 1: "a"
Expected result 1:
"a"  is a letter

Test data 2: "5"
Expected result 2:
"5"  is a digit

Test data 2: "$"
Expected result 1: 
"$"  is a special character

Test data 4: " "
Expected result 4:
" " is a whitespace
*/

let rand = '$';
if(/[0-9]/.test(rand)) {
    console.log(`${rand} is a digit`)
}else if(/[a-zA-z]/.test(rand)){
    console.log(`${rand} is a letter`)
}else if(/\s/.test(rand)){
    console.log(`${rand} is a whitespace`)
} else {
    console.log(`${rand} is a special character`)
}

//ASCII Table way of doing this task
const char = 'M';

if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) console.log(`${char} is a letter`);
else if(char >= '0' && char <= 9) console.log(`${char} is a digit`);
else if (char === ' ') console.log(`${char} is a whitespace`);
else console.log(`${char} is a special character`);

/*
Task04
Write a function named hasBlue() which takes a string argument
and returns true if the string has an occurrence of blue word,
returns false otherwise.
NOTE: Ignore upper/lower cases.
Examples:
hasBlue("Hello World")    -> false
hasBlue("Javabluescript")    -> true
hasBlue("Tech Blue Global")    -> true
hasBlue("1234")    -> false
hasBlue("ABLUEC")    -> true
*/

function hasBlue(str){
    let result = str.toLowerCase().includes('Blue') 
    return result 
}

console.log(hasBlue('Hello World'));


/*
Task05

Write a function named startT() which takes a string argument 
and returns true if the string start with letter T, returns false 
otherwise.
NOTE: Ignore upper/lower cases.

Examples:
startT("Hello World")    -> false
startT("typescript")    -> true
startT("TechGlobal")    -> true
startT("1234")    -> false
startT("ABC")    -> false
*/

const startT3 = word => {
    return /^[t]/i.test(word)
}
