/*
Task-1
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false
*/

function hasUpperCase(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            return true;
        }
    }
    return false;
}


console.log(hasUpperCase("hello")); 



/*
Task-2
Requirement:
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"
*/

function noDigit(str) {
    return str.split('').reduce((result, char) => {
        return (char >= '0' && char <= '9') ? result : result + char;
    }, '');
}

console.log(noDigit('123Hello'))

/*
Task-3
Requirement:
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$"
*/

function noVowel(str) {
    let result = '';
    let vowels = 'AEIOUaeiou';

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}


/*
Task-4
Requirement:
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []
*/

function no13(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] === 13 ? 0 : arr[i]);
    }
    return result;
}

console.log(no13([13, 2, 3]));

/*
Task-5
Requirement:
Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10
*/

function middleInt(a, b, c) {
    return [a, b, c].sort((x, y) => x - y)[1];
}

console.log(middleInt(1, 7, 3));

/*
Task-6
Requirement:
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0
*/

function sumOfDigits(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== ' ') {
            sum += parseInt(str[i]);
        }
    }
    return sum;
}

console.log(sumOfDigits('John\'s age is 29'))

/*
Task-7
Requirement:
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([])  -> []
*/ 

function arrFactorial(arr) {
    function factorial(num) {
        if (num === 0 || num === 1) return 1;
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    return arr.map(num => factorial(num));
}

console.log(arrFactorial([0, 5]))



/*
Task-8
Requirement:
Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' 
*/ 

function categorizeCharacters(word) {
    let letters = [];
    let digits = [];
    let specials = [];

    for (let i = 0; i < word.length; i++) {
        if (/[a-zA-Z]/.test(word[i])) {
            letters.push(word[i]);
        } else if (/[0-9]/.test(word[i])) {
            digits.push(word[i]);
        } else {
            specials.push(word[i]);
        }
    }

    return [letters, digits, specials];
}

console.log(categorizeCharacters('abc123$#%'))
