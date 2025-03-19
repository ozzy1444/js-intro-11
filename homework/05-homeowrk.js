/*
Task-1
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  -> 0
*/

function countPos(arr) {
    let posCounter = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            posCounter++;
    }
}
return posCounter;
}

console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));

/*
Task-2
Requirement:
Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.
NOTE: Ignore case sensitivity. 
Examples:
countA("TechGlobal is a QA bootcamp")  -> 4
countA("QA stands for Quality Assurance")  -> 5
countA("Cypress")  -> 0
*/ 


function countA(str) {
    let counterAs = 0; 
    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'A' || str[i] === 'a') counterAs++ 
}
    return counterAs; 
}

console.log(countA('banana'));

/*
Task-3
Requirement: 
Write a function named as countVowels() which takes a 
string word as an argument and returns the count of the vowel 
letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello")  -> 2
countVowels("Hello World")  -> 3
countVowels("JavaScript is fun")  -> 5
countVowels("")  -> 0
*/ 
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('Hello'))

/*
Task-4
Requirement: 
Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant 
letter.
Examples:
countConsonants("Hello")  -> 3
countConsonants("Hello World")  -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")  -> 0
*/ 

function countConsonants(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countConsonants('JavaScript is fun'))

/*
Task-5
Requirement:
Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.
NOTE: Be careful about the extra whitespaces before 
and after the string.
Examples:
countWords("     Javascript is fun       ")  -> 3
countWords("Cypress is an UI automation tool.    ") 
-> 6 countWords("1 2 3 4") 
-> 4
*/ 

function countWord(str) {
    return str.trim().split(' ').length
}

console.log(countWord('     Javascript is fun       '))

/*
Task-6
Requirement:
Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked.
NOTE: Mathematically, the factorial of a non-negative 
integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/ 

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5))

/*
Task-7
Requirement: 
Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward 
as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true 
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  -> true
*/ 

function isPalindrome(str) {
    str === str.split(' ').reverse().join(' ')
}

console.log(isPalindrome('civic'));

/*
Task-8
Requirement: 
Write a function named as countMultipleWords() which takes 
an array as an argument and returns the count of the elements 
that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after 
the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 
-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 
-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 
-> 4
countMultipleWords([ ]) 
-> 0
*/ 

function countMultipleWords(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].trim().includes(" ")) {
            count++;
        }
    }
    
    return count;
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));

/*
Task-9
Requirement: 
Write a function named as count3OrLess() which takes a 
string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello")  -> 0
count3OrLess("Hi John")  -> 1
count3OrLess("JavaScript is fun")  -> 2
count3OrLess("My name is John Doe")  -> 3
count3OrLess("")  -> 0
*/ 

function count30OrLess(str) {
    let count = 0; 
    for(let i = 0; i < str.length; i++){
        if(str[i].length <= 3) {
            return count++
    }
}
    return count;
}

console.log(count30OrLess("Hi John"));

/*
Task-10
Requirement:
Write a function named as isPrime() which takes a 
number as an argument and returns true if the 
number is prime or returns false otherwise when 
invoked.
NOTE: Mathematically, Prime number is a number that 
can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 
and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no 
negative prime numbers.
Examples:
isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29)  -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/ 

function isPrime(n) {
    if (n < 2) return false; 

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false; 
        }
    }

    return true;
}

console.log(isPrime(5))

/*
Task-11
Requirement:
Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of 
given arrays elements.
NOTE: Be careful about the array sizes as they could be 
different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2] )  -> [9, 3, 2, 7, 
5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])  -> [16, 11, 9,  
3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])  -> [0, 0, 0, 0]
*/ 

function add(arr1, arr2) {
    let maxLength = Math.max(arr1.length, arr2.length);
    let result = [];

    for (let i = 0; i < maxLength; i++) {
        let sum = (arr1[i] || 0) + (arr2[i] || 0);
        result.push(sum);
    }

    return result;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2] ));

/*
Task-12
Requirement: 
Write a function named as removeExtraSpaces() which takes 
a string word as an argument and returns the string back with 
all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello")  -> "Hello" 
removeExtraSpaces("      Hello    World     ")  -> "Hello 
World" 
removeExtraSpaces("     JavaScript is          fun")  -> 
"JavaScript is fun”
removeExtraSpaces("")  -> "" 
*/ 

function removeExtraSpaces(word) {
    return word.trim().replace(/\s+/g, ' ');
}

console.log(removeExtraSpaces(("      Hello    World     ") ))

/*
Task-13
Requirement: 
Write a function named findClosestTo10() which takes an 
array of numbers as argument and returns the closest element 
to 10 from the given array.
NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, 
return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57] )  -> 5
findClosestTo10([10, -13, 8, 12, 15, -20])  -> 8
findClosestTo10([0, -1, -2])  -> 0
*/ 

function findClosestTo10(arr) {
    if (arr.length === 0) return null; 

    let closest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i] - 10) < Math.abs(closest - 10)) {
            closest = arr[i]; 
        }
    }

    return closest;
}

console.log(findClosestTo10([10, -13, 8, 12, 15, -20])) 

/*
Task-14
Requirement: 
Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.
NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.
Examples:
isEmailValid("")  -> false
isEmailValid("@gmail.com")  -> false
isEmailValid("johndoe@yahoo")  -> false
isEmailValid("johndoe@.com")  -> false
isEmailValid("a@outlook.com")  -> false
isEmailValid("johndoe@a.com")  -> false
isEmailValid("johndoe@@gmail.com")  -> false
isEmailValid("johndoe@gmail.com")  -> true
*/ 

function isEmailValid(email) {
    if (!email.includes("@") || !email.includes(".")) return false;

    let atIndex = email.indexOf("@");
    let dotIndex = email.lastIndexOf(".");

    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex === email.length - 1) {
        return false;
    }

    return true;
}

console.log(isEmailValid("johndoe@.com"));

/*
Task-15
Requirement: 
Write a function named as isPasswordValid() which takes a 
string email as an argument and returns true if the password 
is valid or returns false otherwise when invoked.
NOTE: A VALID PASSWORD:
•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1 
special char.
•should NOT have any space.
Examples:
isPasswordValid("")  -> false
isPasswordValid("abcd")  -> false
isPasswordValid("abcd1234")  -> false
isPasswordValid("Abcd1234")  -> false
isPasswordValid("Chicago12345US!#$%")  -> false
isPasswordValid("Abcd1234$")  -> true
isPasswordValid("Chicago123$")  -> true
isPasswordValid("Test1234#")  -> true
*/ 

