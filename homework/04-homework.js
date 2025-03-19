/*
Requirement:
Write a program that outputs all the numbers that are 
divisible by 7 starting from 1 to 100 (both inclusive).
Expected Output: 7 14 21 91 98
*/

for(let i = 1; i <= 100; i++) {
    if(i % 7 === 0) console.log(i)
}



/*
Task-2
Requirement:
Write a program that outputs all the numbers that are 
divisible by both 2 and 3 starting from 1 to 50 (both 
inclusive).
Expected Output:
6 12 18 ... 
*/
for(let i = 1; i <= 50; i++){
    if(i % 2 === 0 && i % 3 === 0) console.log(i)
}

/*
Task-3
Requirement:
Write a program that outputs all the numbers that are 
divisible by 5 starting from 100 to 50 (both inclusive).
Expected Output:
*/

for(let i = 100; i >= 50; i--){
    if(i % 5 === 0) console.log(i)
}

/*
Task-4
Requirement:
Write a program that outputs the squares of all numbers 
starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!
Expected Output:
The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
The square of 7 is =  49
*/

for (let i = 0; i <= 7; i++) { 
    console.log(i ** 2);
}

/*
Task-5
Requirement:
Write a program that finds sum of the numbers starting 
from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
NOTE: Use loop!!!
Expected Output:
55
*/

let sum = 1;
for(let i = 1; i <= 10; i++){
    sum += i
}
console.log(sum)

/*
Task-6
Requirement:
Write a program generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n 
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.
*/

const { getRandomNumber } = require('./../utils/MathHelper'); 
let ranNum = getRandomNumber(1, 10);
console.log(ranNum);

let fact = 1;
for(let i = 1; i <= ranNum; i++){
    fact *= i
}

console.log(fact) 

/*
Task-7
Requirement:
Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.
The program should also count how many attempts it 
takes to generate such a number.
Eventually, print the random number divisible by 5 with 
the number of attempts as below.
Expected Output:
The random number is {randomNumber} and it took 
{attempts} attempt/s to generate it.
*/
const { getRandomNumber } = require('./../utils/MathHelper'); 
let ranNum2 = getRandomNumber(1, 100);
console.log(ranNum2);

let attempts = 0;

do {
    ranNum2 = getRandomNumber(1, 100);
    attempts++;
} while (ranNum2 % 5 !== 0);

console.log(`The random number is ${ranNum2} and it took ${attempts} attempts to generate it`); 

/*
Task-8
Requirement:
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania
THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically
Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]
 */

let arr1 = ['Germany', 'Argentina', 'Ukraine', 'Romania']

console.log(arr1.sort())

/*
Task-9
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 
THEN:
-Output the entire array
-Then, check if the array has Pluto element
if it has Pluto, then output true
if it does not have Pluto, output false
Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true
*/
let arr2 = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]

console.log(arr2)
console.log(arr2.includes('Pluto')); 

/*
Task-10
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael
THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
if it has both, then output true
if it does not have both, output false
Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
*/

let arr3 = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];
arr3.sort()
console.log(arr3)
console.log(arr3.includes('Garfield') && arr3.includes('Felix'))

/*
Task-11
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75
THEN:
-Output the entire array
-Ouput each element
Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/
let arrOfNums = [10.5, 20.75, 70, 80, 15.75];

for (let i = 0; i < arrOfNums.length; i++)console.log(arrOfNums[i]);

/*
Task-12
Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler
THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', 
ignoring cases.
-Output how many elements has 'book' or 'pen' partial 
strings, ignoring cases.
Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4 
*/

let arr4 = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
let startBP = 0;
let startBookPen = 0;

for(let i = 0; i <= arr4.length -1; i++)
    if(arr4[i].toLowerCase().startsWith('p')) startBP++;
for(let i = 0; i <= arr4.length -1; i++)
    if(arr4[i].toLowerCase().startsWith('b')) startBP++;
for(let i = 0; i <= arr4.length -1; i++)
    if(arr4[i].toLowerCase().includes('book')) startBookPen++;
for(let i = 0; i <= arr4.length -1; i++)
    if(arr4[i].toLowerCase().includes('pen')) startBookPen++;

console.log(arr4);
console.log(`Elements start with 'B' or 'P' ${startBP}`);
console.log(`Elements start with 'Book' or 'Pen' ${startBookPen}`);



/*
Task-13
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78
THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10
Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2
*/
let arr5 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78]
let moreThan10 = 0;
let lessThan10 = 0;
let equal10 = 0;

for(let i = 0; i <= arr5.length - 1; i++) {
    if(arr5[i] > 10) moreThan10++
}
console.log(`Elements that are more than 10 = ${moreThan10}`); 

for(let i = 0; i <= arr5.length - 1; i++) {
    if(arr5[i] < 10) lessThan10++
}
console.log(`Elements that are less than 10 = ${lessThan10}`); 

for(let i = 0; i <= arr5.length - 1; i++) {
    if(arr5[i] === 10) equal10++
}
console.log(`Elements that are 10 = ${equal10}`); 

/*
Task-14
Requirement:
-Create 2 arrays that stores numbers below.
First array->  [ 5, 8, 13, 1, 2 ]
Second array ->  [ 9, 3, 67, 1, 0 ]
THEN:
-Output both arrays
–Then, create a new array that will take the greatest 
value of same index from first 2 arrays and output the 
third array as well.
Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]
*/

const arr6 = [ 5, 8, 13, 1, 2 ]
const arr7 = [ 9, 3, 67, 1, 0 ]
let arr8 = [];

for(let i = 0; i <= arr6.length - 1; i++){
    arr8.push(Math.max(arr6[i], arr7[i])); 
}
console.log(arr8);



/*
Task-15
Requirement:
Write a function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types 
of the elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])  -> -1
*/ 

const arr9 = [3, 7, 10, 0, 3, 1];
function firstDuplicate(arr9) {
    for(let i = 0; i <= arr9.length - 1; i++){
        for(let j = i + 1; j <= arr9.length - 1; j++) {
            if(arr9[i] === arr9[j]) {
                return arr9[i]
            } 
        }
    }
    return -1;
} 

console.log(firstDuplicate(arr9));

/*
Task-16
Requirement:
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -
> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -
> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -
> [ ]
*/

let arr10 = [ 0, -4, -7, 0, 5, 10, 45, -7, 0 ];
function getDuplicates2(arr10){
for(let i = 0; i <= arr10.length - 1; i++) {
    for(let j = 0; j <= arr10.length -1; j++){
        if(arr10[i] === arr10[j]) {
            return arr10[i];

    }
}
}
}

let arrNew10 = [ 0, -4, -7, 0, 5, 10, 45, -7, 0 ];

function getDuplicates3(arrNew10){
for(let i = 1; i <= arr10.length - 1; i++) {
    for(let j = 1; j <= arr10.length -1; j++){
        if(arr10[i] === arr10[j]) {
            return arrNew10[i];

    }
}
}
}
console.log(getDuplicates2(arr10));
console.log(getDuplicates3(arrNew10));


/*
Task-17
Requirement:
Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string.
Examples:
reverseStringWords("Hello World")  -> "olleH dlroW"
reverseStringWords("I like JavaScript")  -> "I ekil tpircSavaJ"
reverseStringWords("Hello")  -> "olleH"
reverseStringWords("")  -> ""
reverseStringWords("    ")  -> ""
*/

let word = ["Hello World"];

console.log(word.sort((a, b) => b - a));


/*
Task-18
Requirement:
Write a function named as getEvens() which takes 2 number 
arguments and returns all the even numbers as an array 
stored from smallest even number to greatest even number 
when invoked.
NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no even numbers in the 
range of given 2 numbers. 
Assume you will not be given negative numbers.
Examples:
getEvens(2, 7) -> [ 2, 4, 6 ]
getEvens(17, 5) -> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4) -> [ 4 ]
getEvens(3, 3) -> [ ]
*/ 


function getEvens(num1, num2) {
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let evens = [];
    
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evens.push(i);
        }
    }
    
    return evens;
}

/*
Task-19
Requirement:
Write a function named as getMultipleOf5() which takes 2 
number arguments and returns all the numbers divisible by 5 
as an array stored from first found match to last found match 
when invoked.
NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no numbers divisible by 5 
in the range of given 2 numbers. 
Assume you will not be given negative numbers.
Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]
*/

function getMultipleOf5(num1, num2){
    let divisibleBy5 = [];
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    for(let i = 0; i <= start; end++)
        if(i % 5 === 0) return divisibleBy5.push(i);
}

/*
Task-20
Requirement:
Write a function named as fizzBuzz() which takes 2 number arguments 
and returns a string composed with below requirements when invoked.
•You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
•You will need to convert numbers divisible by 3 to 'Fizz'
•You will need to convert numbers divisible by 5 to 'Buzz'
•You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
•The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
Examples:fizzBuzz(13, 18) -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" fizzBuzz(12, 5) -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"fizzBuzz(5, 5) -> "Buzz"fizzBuzz(9, 6) -> "Fizz | 7 | 8 | Fizz"
*/ 

function fizzBuzz(num1, num2) {
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let result = "";
    
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += "FizzBuzz ";
        } else if (i % 3 === 0) {
            result += "Fizz ";
        } else if (i % 5 === 0) {
            result += "Buzz ";
        } else {
            result += i + " ";
        }
    }
    
    return result.trim();
}


console.log(getEvens(3, 10)); 