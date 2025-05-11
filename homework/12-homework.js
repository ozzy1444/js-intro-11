/*
Write a function named makeNegative() that takes a number and returns its 
negative value.
NOTE: The number can be negative already, in which case no change is required.
NOTE: Zero (0) is not checked for any specific sign. Negative zeros make no 
mathematical sense. So, zero will stay as zero.
Examples
makeNegative(10)       -> -10
makeNegative( -7)      -> -7
makeNegative( 0)        -> 0
makeNegative(0.45)    -> -0.45
*/ 

function makeNegative(num) {
    if(num > 0) {
        return -num
    } else if(num < 0) {
        return num 
        }
        else {
            return 0
        }
}

console.log(makeNegative(0))


/*
Task-2
Requirement:
Write a function isSumEvenOrOdd() which takes three numbers as 
arguments and determines if the sum of these numbers is odd or even.
Examples:
isSumEvenOrOdd(0, 1, 4)  -> "odd"
isSumEvenOrOdd(0, -1, -5)      -> "even"
isSumEvenOrOdd(0, 0, 0)  -> "even"
isSumEvenOrOdd(7, 1, 9)        -> "odd"
isSumEvenOrOdd(1, 1, 1)        -> "odd"
*/ 

function isSumEvenOrOdd(num, num2, num3) {
    let sum = num + num2 + num3

    if(sum % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

console.log(isSumEvenOrOdd(1, 1, 4));



/*
Task-3
Requirement:
Write a function named decimal2() which takes an array of numbers as an 
argument and returns the array with the same numbers rounded up or down and 
represented with only two decimals.
Examples:
decimal2( [94.356, 8.9752] )  -> [ 94.36, 8.98 ]
decimal2( [76.62, 128.4, 84] )  -> [ 76.62, 128.4, 84 ]
decimal2( [20987, 3.53245, 12.345, 32.9] )  -> [ 20987, 3.53, 12.35, 32.90 
]
decimal2( [ ] )  -> [  ]
decimal2( [4.35623, 8.9742] )  -> [ 4.36, 8.97 ]
*/

function decimal2(arr) {
    return Math.floor(arr).toFixed(2);
}

console.log([76.62, 128.4, 84]) 


/*
Task-4
Requirement:
Write a function named myPow() which takes two numbers, x and n, as its 
arguments and returns x to the power of n without using Math.pow(). 3 to the 
power of 3 is 3*3*3 = 27. 
NOTE: Any number to the power of 0 equals 1. Any number to the power of 1 
equals the number itself.
myPow(3, 3)  -> 27
myPow(10, 1)  -> 10
myPow(100, 0)  -> 1
myPow(1, 1)  -> 1
myPow(4, 2)    -> 16
myPow(0, 0)    -> 1
myPow(5, 3)    -> 125
*/ 

function myPow(x, n) {
    let strN = 
    
    return x * length;
}

console.log(myPow(3, 3))

/*
Task-5
Requirement:
Write a function named findLongestWord() which takes a string as input and 
returns the longest word in the string.
NOTE: If the string is empty or consists of spaces only, then return empty string.
NOTE: If the string consists of multiple words having the longest word, then 
return the first occurrence.
findLongestWord("The quick brown fox jumped over the lazy dog")  -> 
"jumped"
findLongestWord("This is a sample string for testing")  -
>"testing" 
findLongestWord("One two ten")  -> "One"
findLongestWord("")  -> ""
*/ 

function findLongestWord(str) {
    let words = str.split(' ')
    let longest = '';

    for(const word of words) {
        if(word.length > longest.length)
            longest = word
    }
    return longest
}

console.log(findLongestWord("This is a sample string for testing"))

