let n1 = 0; 
let n2 = 50; 

let randomNumber = Math.abs((Math.round(Math.random() * (n2 - n1) + n1)));

console.log(randomNumber); 

console.log(randomNumber * 5); 


/// -----------------------task 2 

let m1 = Math.round(Math.random() * (10 - 1) + 1)
let m2 = Math.round(Math.random() * (10 - 1) + 1)

console.log(m1, m2);

let max1 = Math.max(m1, m2);
let min1 = Math.min(m1, m2);

let result = max1 - min1

console.log(result); //result 4, 2, 2

//-------------------------task 3 



const rand1 = Math.round(Math.random() * (100 - 50) + 50); 

console.log(rand1); 

const result1 = rand1 % 10; 
console.log(` The random number is ${result1}`); 


//-------------------------task 4



let a1 = Math.round(Math.random() * (10 - 1)) + 1; 
let a2 = Math.round(Math.random() * (10 - 1)) + 1; 
let a3 = Math.round(Math.random() * (10 - 1)) + 1; 
let a4 = Math.round(Math.random() * (10 - 1)) + 1; 
let a5 = Math.round(Math.random() * (10 - 1)) + 1; 

let firstNumber = (a1 * 5)
let secondNumber = a2 * 4;
let thirdNumber = a3 * 3;
let fourthNumber = a4 * 2;
let fifthNumber = a5 * 1; 

let result3 = firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber

console.log(result3); 118



//-------------------------task 5

let z1 = Math.round(Math.random() * (25 - 1)) + 1; 
let z2 = Math.round(Math.random() * (50 - 26)) + 26; 
let z3 = Math.round(Math.random() * (51 - 75)) + 51; 
let z4 = Math.round(Math.random() * (76 - 100)) + 100;

console.log(z1, z2, z3, z4);

let maxA = Math.max(z1, z2, z3, z4);
let minA = Math.min(z1, z2, z3, z4);

console.log(`Difference of max and min = ${maxA - minA}`); 

console.log(`Difference of second and third = ${Math.abs(z2 - z3)}`)

console.log(`Average of all = ${(z1 + z2 + z3 + z4) / 4}`)




function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(2)); 
console.log(isEven(3)); 
console.log(isEven(0)); 
console.log(isEven(-2)); 
console.log(isEven(-7)); 



function initials(fname, lname) {
    return `${fname[0]}.${lname[0]}`;
}

console.log(initials('John', 'Doe'))



function inits(fullname) {
    let fullnameArr = fullname.split(' ')
    return fullnameArr[0][0] + fullnameArr[1][0].toUpperCase(); 
}

console.log(inits('max smith')); 



function isWin(num1, num2) {
    return num1 > 0 && num2 > 0 ;
}

console.log(isWin(1, 0)) // false
console.log(isWin(1, 5)) // true

const isWin2 = function (num1, num2) {
    return num1 > 0 && num2 > 0;
}; 

const isWin3 = (num1, num2) => num1 > 0 && num2 > 0;


console.log(isWin(2, 5)); // true
console.log(isWin2(2, -3)); // false
console.log(isWin3(2, 7)); // true


function theEnd(str, bool) {
    if (str === true)
        console.log(true);
}  {
    console.log(false)
} 

function theEnd(str, bool) { 
    if(bool === true) {
        return str[0];
    }
    else {
        return str.at(-1);
    }
}

/*
Task02

Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 
-if it has any vowel, then print true
-Else, print false
Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1: let s1 = "JavaScript";
Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true

Test Data 2: let s1 = "";
Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/

let ss1 = "xxx";

console.log(theEnd('Hello', true)); // 'H'
console.log(theEnd('Hello', false)); // 'o'

let s1 = 'TechGlobal'
console.log(ss1.length)
console.log(ss1[0]); 
console.log(ss1.at(-1));

//s1 = s1.toUpperCase(); 
//let hasVowel = s1.includes('a') || s1.includes('i') || s1.includes('u') || s1.includes('o') || s1.includes('e');
console.log(hasVowel)


/*
Task03

Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1: let s2 = "x";
Expected Result 1: "x"

Test Data 2: let s2 = "abc";
Expected Result 2: "b"

Test Data 3: let s2 = "civic";
Expected Result 3: "v"
*/


let nn1 = 'civic'; 

/*
string      length        middle index
hello         5              2       (str.length - 1) / 2
tatyana       7              3       (str.length - 1) / 2
abc           3              1       (str.length - 1) / 2

This formula always works for getting the middle chatacter
*/

console.log(nn1[(nn1.length - 1) / 2]); 

/*
Task04

Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1: let s3 = "";
Expected Result 1: ""

Test Data 2: let s3 = "abcd";
Expected Result 2: "bc"

Test Data 3: let s3 = "JavaScript";
Expected Result 3: "Sc"


Toyota -> yo
*/

let s3 = 'John'; 

console.log(s3[s3.length / 2 - 1] + s3[s3.length / 2]); // oh



/*
Task05

Requirement:
Write a program that divides the given String. Assume the length of the 
String will at least be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters

Test Data 1: let s4 = "abcd";
Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = ''

Test Data 2: let s4 = "JavaScript";
Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s4 = 'Global'; 

console.log(s4.slice(0,2)); 
console.log(s4.slice(-2));
console.log(s4.slice(2, -2));


/*
Task06

Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print 
false.

Test Data 1: let s5 = "ab";;
Expected Result 1: true

Test Data 2: let s5 = "abcd";
Expected Result 2: false

Test Data 3: let s5 = "12ab12";;
Expected Result 1: true

Test Data 4: let s5 = "JavaScript";
Expected Result 4: false
*/

let s5 = 'Tech'; 
let firstTwo = s5.slice(0,2);
let lastTwo = s5.slice(-2); 

console.log(firstTwo === lastTwo)

console.log(s5.slice(0, 2) === s5.slice(-2)); 



/*
Task07

Requirement:
Write a program that gets rid of first and last characters of given two String values. 
Then, add these two String values to each other and print the result. 

Test Data 1:
let s61 = "orange";
let s62 = "6";
Expected Result 1: rang

Test Data 2:
let s61 = "1234";
let s62 = "Green";
Expected Result 2: 23ree

Test Data 3:
let s61 = "123456";
let s62 = "Blue";
Expected Result 3: 2345lu

Test Data 4:
let s61 = "Yellow";
let s62 = "Red";
Expected Result 4: elloe
*/

let s61 = 'blue';
let s62 = 'green'; 

console.log(s61.slice(1, -1) + s62.slice(1, -1)); 



/*
Task08

Requirement:
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false

Test Data 1: let s7 = "";
Expected Result 1: false

Test Data 2: let s7 = "red";
Expected Result 2: false

Test Data 3: let s7 = "green";
Expected Result 3: false

Test Data 4: let s7 = "xxbluexx";
Expected Result 4: true
*/

let s7 = 'xxabc'; 

console.log(s7.endsWith('xx') && s7.startsWith('xx')) // false




/*
Task09

Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1: let s8 = "";
Expected Result 1: ""

Test Data 2: let s8 = " ";
Expected Result 2: " "

Test Data 3: let s8 = "I like Apple";
Expected Result 3: "Apple like I"

Test Data 4: let s8 = "JavaScript is nice to learn";
Expected Result 4: "learn is nice to JavaScript"
*/

let s8 = 'I like Apple';

let words = s8.split(' ');
let firstWord = words[0]
let lastWord = words[words.length - 1]; 

//better method for now below

console.log(s8.split(' ')); 

let first = s8.slice(0, s8.indexOf(' ')); 
let last = s8.slice(s8.lastIndexOf(' ') + 1); 
let middle = s8.slice(s8.indexOf(' '), s8.lastIndexOf(' ') + 1);

console.log(last + middle + first); 





/*
Task10

Requirement:
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word.

Test Data 1: let s9 = " Good morning";
Expected Result 1: 2

Test Data 2: let s9 = "Hello    ";
Expected Result 2: 1

Test Data 3: let s9 = "I like Apple";
Expected Result 3: 3

Test Data 4: let s9 = "JavaScript is nice to learn";
Expected Result 4: 5
*/

let s10 = '  Hello World ';

console.log(s10.trim().split(' ').length) // 2

let s11 = ' JavaScript    is   nice to      learn';

console.log(s11.trim().split(/\s+/).length) // 5





