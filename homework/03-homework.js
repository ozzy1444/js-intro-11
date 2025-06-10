console.log('\n -------------TASK 1-----------\n')

/*
Write a  program that generates 3 random numbers 
between 1 to 100 (1 and 100 are included)
Print true if the average of the random numbers is 
greater or equals 50. 
Print false if the average of the random numbers is less 
than 50.
*/

const { getRandomNumber } = require('./../utils/MathHelper.js');

let rand1 = getRandomNumber(1, 100);
let rand2 = getRandomNumber(1, 100);
let rand3 = getRandomNumber(1, 100);

let aveRand = (rand1 + rand2 + rand3) / 3; 

console.log(aveRand)

if(aveRand >= 50) {
    console.log(true) 
} 
else {
    (aveRand <= 50) 
    console.log(false)
}

console.log('\n -------------TASK 2-----------\n')

/*
Write a  program that generates 3 random numbers 
between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print 
“DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
*/

const { getRandomNumber } = require('./../utils/MathHelper.js');

let n1 = getRandomNumber(1, 3);
let n2 = getRandomNumber(1, 3);
let n3 = getRandomNumber(1, 3);

if(n1 === n2 && n1 === n3 && n2 === n3) {
    console.log('NO MATCH');
}
else if(n1 === n2 || n1 === n3 || n2 === n3) {
    console.log('DOUBLE MATCH')
}
else {
    console.log('TRIPLE MATCH')
}


console.log('\n -------------TASK 3-----------\n')

/*
Write a function named as hasA() which takes a string 
word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when 
invoked
*/

function HasA(word) {
    if(word.includes('A') || word.includes('a')) return true; 
    return false
}
console.log(HasA('Andy'))
console.log(HasA('John'))


console.log('\n -------------TASK 4-----------\n')

/*
Write a function named as doubleOrTripleWord() 
which takes a string word as an argument and returns 
the given word back tripled if the string length is even 
or doubled if the string length is odd when invoked.
*/

function doubleOrTripleWord(word) {
    if(word.length % 2 === 0) return (`${word}${word}${word}`)
        else {
    return(`${word}${word}`)}
}

console.log(doubleOrTripleWord('Aziz'))
console.log(doubleOrTripleWord('Atieh'))

console.log('\n -------------TASK 5-----------\n')
/*
Write a function named as firstWord() which takes a 
string word as an argument and returns the first word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
*/

function firstWord(word) {
    let sentence = 'Tech is Global';
    const splitWord = sentence.split(' ');
    return splitWord[0];
}

console.log(firstWord())

console.log('\n -------------TASK 6-----------\n')

/*
Write a function named as lastWord() which takes a 
string word as an argument and returns the last word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word
*/

function lastWord(str) {
    let lastWord = 'Tech is Global';
    let splitWord1 = lastWord.split(' ');
    return splitWord1.at(-1);
}

console.log(lastWord())


console.log('\n -------------TASK 7-----------\n')

/*
Write a function named as firstlastWord() which takes 
a string word as an argument and returns the first and 
last words from the given string when invoked.
*/

function firstlastWord(str1) {
    let sent = 'Tech is Global'
    let sentSplit = sent.split(' ');
    return `${sentSplit[0]}${sentSplit.at(-1)}`
}

console.log(firstlastWord())


console.log('\n -------------TASK 8-----------\n')

/*
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked.
*/

function startVowel(word) {
    if(word[0] === 'a' || word[0] === 'e' || word[0] === 'i' || word[0] === 'o' || word[0] === 'u' || word[0] === 'A' || word[0] === 'E' || word[0] === 'I' || word[0] === 'O' || word[0] === 'U') return true
    return false
}


console.log(startVowel('Apple'))
console.log(startVowel('Car'))

console.log('\n -------------TASK 9-----------\n')

/*
Write a function named as swap4() which takes a 
string word as an argument and returns the string back 
with its first and last 4 characters swapped when 
invoked.
NOTE: Return empty string if the given string does not 
have 8 or more characters.
*/

function swap4(word) {
    let first4 = word.slice(0, 4);
    let middle = word.slice(4, -4);
    let last4 = word.slice(-4);
    return `${last4}${middle}${first4}`
}

console.log(swap4('TechGlobal'));

console.log('\n -------------TASK 10-----------\n')

/*
Write a function named as swapFirstLastWord() 
which takes a string word as an argument and returns 
the string back with its first and last words swapped 
when invoked.
NOTE: Return empty string if the given string does not 
have 2 or more words.
*/

function swapFirstLastWord(word) {
    let sent2 = 'I love school'
    let sentsplit2 = sent2.split(' ');
    let firstWord = sentsplit2[0];
    let lastWord = sentsplit2.at(-1)
    let middleWords = sentsplit2.slice(1, -1)

    return `${lastWord} ${middleWords} ${firstWord}`
}

console.log(swapFirstLastWord('I love Javascript'));


