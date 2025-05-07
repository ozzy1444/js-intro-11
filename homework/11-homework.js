/*
Write a function named countPalindrome() which takes a string and returns 
the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and 
backwards. Example: level, radar, deed, refer.
Examples:
countPalindrome("Mom and Dad" )  -> 2
countPalindrome("See you at noon")  -> 1
countPalindrome("Kayak races attracts racecar drivers")  -> 2
countPalindrome("")  -> 0
countPalindrome("No palindrome here")  -> 0
*/

function countPalindrome(str) {
    paliCount = 0;
    let words = str.split(' ');

    for (const word of words) {
        let lower = word.toLowerCase()
        if (lower.split('').reverse().join('') === lower) {
            paliCount++
        }
    }

    return paliCount;

}

console.log(countPalindrome('Mom and Dad'));

/*
Task-2
Requirement:
Write a function named sum() which takes an array of numbers and a boolean 
value as arguments. It will return the sum of the numbers positioned at even 
indexes if true. And, return sum of numbers positioned at odd indexes if false.
Examples:
sum([1, 5, 10], true)  -> 11
sum([3, 7, 2, 5, 10], false)  -> 12
sum([-1, 1, -2, 2], true)  -> -3
sum([0, -1, 15, 1], false)  -> 0
sum([1, 2, 3, 4, -4], true)  -> 0
*/

function sum(numbers, useEvenIndexes) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (useEvenIndexes && i % 2 === 0) {
            total += numbers[i];
        } else if (!useEvenIndexes && i % 2 !== 0) {
            total += numbers[i];
        }
    }

    return total;
};

console.log(sum([1, 5, 10], true))

/*
Task-3
Requirement:
Write a function named nthChars() which takes a string and a number as 
arguments and returns the string back with every nth characters. 
Examples:
nthChars("Java", 2)  -> "aa"
nthChars("JavaScript", 5)   -> "St"
nthChars("Java", 3)   -> "v"
nthChars("Hi", 4)   -> ""
nthChars("0123456789", 2)  -> "13579" 
*/

function nthChars(str, n) {
    let result = '';
    for (let i = n - 1; i < str.length; i += n) {
        result += str[i];
    }
    return result;
};

console.log(nthChars("Java", 2))

/*
Task-4
Requirement:
Write a function named canFormString() which takes two string arguments 
and returns true if the second string can be formed by rearranging the 
characters of first string. Return false otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
canFormString("Hello", "Hi")   -> false
canFormString("programming", "gaming")   -> true
canFormString("halogen", "hello")   -> false
canFormString("CONVERSATION", "voices rant on")   -> true
canFormString("12", "123")  -> false
*/

function canFormString(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }


    return str1.split('').sort().join('') === str2.split('').sort().join('');
};

console.log(canFormString("halogen", "hello"));

/*
Task-5
Requirement:
Write a function named isAnagram() which takes two string arguments and 
returns true if the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of 
another word or phrase. In the context of strings, checking if two strings are 
anagrams of each other means verifying if they contain the same characters in 
the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
isAnagram("Apple", "Peach")   -> false
isAnagram("listen", "silent")   -> true
isAnagram("astronomer", "moon starer")   -> true
isAnagram("CINEMA", "iceman")   -> true
isAnagram("123", "1234")  -> false
*/

function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }


    return str1.split('').sort().join('') === str2.split('').sort().join('');
};

console.log(isAnagram("astronomer", "moon starer"));

/*
Task-6
Requirement:
Write a function named count() which takes an array of numbers and a 
boolean value as arguments. It will return the total count of the even numbers if 
the boolean value is true. And return the total count of the odd numbers if the 
boolean value is false. 
Examples:
count([1, 5, 10], true)  -> 1
count([3, 7, 2, 5, 10], false)  -> 3
count([-1, 1, -2, 2], true)  -> 2
count([0, -1, 15, 1], false)  -> 3
count([1, 2, 3, 4, -4], true)  -> 3
*/

function count(numbers, countEvens) {
    let total = 0;

    for (let num of numbers) {
        if (countEvens && num % 2 === 0) {
            total++;
        }else if (!countEvens && num % 2 !== 0) {
            total++;
    }
    }
    return total;
};

console.log(count([-1, 1, -2, 2], true))

/*
Task - 7
Requirement:
Write a function named sumDigitsDouble() which takes a string and returns 
the sum of the digits in the given String multiplied by 2. Return - 1 if the given 
string does not have any digits.Ignore negative numbers.
    Examples:
sumDigitsDouble("Javascript") -> -1
sumDigitsDouble("23abc45") -> 28
sumDigitsDouble("Hi-23") -> 10
sumDigitsDouble("ab12") -> 6
sumDigitsDouble("n0numh3r3") -> 12
*/


function sumDigitsDouble(str) {
    let sum = 0;
    for (let word of str) {
      if (word >= '0' && word <= '9') {
        sum += parseInt(word);
      }
    }
    return sum > 0 ? sum * 2 : -1;
};

console.log(sumDigitsDouble("23abc45"));

/*
Task - 8
Requirement:
Write a function named countOccurrence() which takes two string arguments 
and returns how many times that the first string can form the second string.
    Examples:
countOccurrence("Javascript", "Java") -> 1
countOccurrence("Hello", "World") -> 0
countOccurrence("Can I can a can", "anc") -> 3
countOccurrence("Hello", "l") -> 2
countOccurrence("IT conversations", "IT") -> 2
*/ 
