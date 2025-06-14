/*
Double or Triple the Word 
Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length 
is even or doubled if the string length is odd when 
invoked. 
 
Examples: 
doubleOrTripleWord("Tech")     -> "TechTechTech" 
doubleOrTripleWord("Apple")     -> "AppleApple” 
doubleOrTripleWord("")       -> "" 
doubleOrTripleWord(" ")       -> " " 
doubleOrTripleWord("1")       -> "11" 
doubleOrTripleWord("22")       -> "222222" 
*/ 

function doubleOrTripleWord(str) {
  if(str.length % 2 === 0) return `${str}${str}${str}`
   else {
  return `${str}${str}`
  }
  
}

console.log(doubleOrTripleWord("Tech"))

 
/*
First and Last Word 
Write a function named as firstlastWord() which takes a string 
word as an argument and returns the 
first and last words from the given string when invoked. 
NOTE: Return empty string if the given string does not have any word. 
 
Examples: 
firstLastWord("Hello World")     -> "HelloWorld" 
firstLastWord("I like JavaScript")    -> "IJavaScript” 
firstLastWord("Hello")       -> "HelloHello" 
firstLastWord("")         -> "" 
firstLastWord("  ")       -> "" 
*/ 

function firstLastWord(str) {
  let strArr = str.split(' ');
  let firstWord = str[0];
  let lastWord = strArr[strArr.length -1];
  let result = firstWord + lastWord
  return result
}

console.log(firstLastWord('I love coding'))
 
/*
Has Vowel 
Write a function named hasVowel() which takes a 
string argument and returns true if the string has a 
vowel, returns false if the string doesn’t contain any vowel letter. 
NOTE: Vowels are = a, e, o, u, i. 
NOTE: Ignore upper/lower cases. 
 
Examples: 
hasVowel("")        -> false 
hasVowel("Javascript")     -> true 
hasVowel("Tech Global")     -> true 
hasVowel("1234")       -> false 
hasVowel("ABC")       -> true 
*/ 

function hasVowel(str) {
  let vowel = 'AEOUIaeoui';
  for(const char of str) {
    if(vowel.includes(char)) {
      return true;
    }
  }
  return false;
}

console.log(hasVowel('Java'))
 
/*
Start Vowel 
Write a function named as startVowel() which takes a string word as an argument and returns true if 
given string starts with a vowel, and false otherwise when invoked. 
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Examples: 
startVowel("Hello")     -> false 
startVowel("Apple")    -> true 
startVowel("orange")   -> true 
startVowel("")     -> false 
startVowel("  ")     -> false 
startVowel("123")     -> false 
*/ 

function startVowel(str) {
  let vowel = 'AEOUIaeoui'
  if(vowel.includes(str[0])) {
    return true;
  }
  return false;
}

console.log(startVowel('Apple'))
 
/*
Average of Edges 
Write a function named averageOfEdges() which takes three number arguments and will return 
average of min and max numbers. 
 
Examples: 
averageOfEdges(0, 0, 0)   -> 0 
averageOfEdges(0, 0, 6)   -> 3 
averageOfEdges(-2, -2, 10)   -> 4 
averageOfEdges(-3, 15, -3)   -> 6 
averageOfEdges(10, 13, 20)   -> 15 
*/ 
 
function averageOfEdges(num, num2, num3) {
  let max = Math.max(num, num2, num3)
  let min = Math.min(num, num2, num3)
  let averageOfMinMax = (max + min) / 2
  return averageOfMinMax
} 

console.log(averageOfEdges(-2, -2, 10))

function averageOfEdges(num, num2, num3) {
  let max = Math.max(num, num2, num3)
  let min = Math.min(num, num2, num3)
  let average = (max + min) / 2
  return average
}

console.log(averageOfEdges(0, 0, 6))
 
 
 
/*
Swap First and Last Characters 
Write a function named replaceFirstLast() which takes a string argument and returns a new string with 
the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string. 
 
Examples: 
replaceFirstLast("")         ->  "" 
replaceFirstLast("Hello")       ->  "oellH" 
replaceFirstLast("Tech Global")     -> "lech GlobaT" 
replaceFirstLast("A")       -> "" 
replaceFirstLast("    A      ")      -> ""
*/ 

function replaceFirstLast(str) {
  let firstLetter = str[0];
  let lastLetter = str[str.length - 1];
  let middleLetters = str.slice(1, -1);
  let result = `${lastLetter}${middleLetters}${firstLetter}`
  if(str.length < 2) {
    return ''
  }
  else return result 
}

console.log(replaceFirstLast('Tech Global'))
 
/*
Swap First and Last Four Characters 
Write a function named as swap4() which takes a string word as an argument and returns the string 
back with its first and last 4 characters swapped when invoked. 
NOTE: Return empty string if the given string does not have 8 or more characters.  

Examples: 
swap4("abc")       -> "" 
swap4("JavaScript")      -> "riptScJava" 
swap4("TechGlobal")     -> "obalGlTech" 
swap4("")         -> "" 
swap4("  ")       -> "" 
swap4("Apple")       -> "" 
*/ 

function swap4(str) {
  let first4 = str.slice(0, 4);
  let last4 =  str.slice(-4);
  let middle = str.slice(4, -4);
  let result = `${last4}${middle}${first4}`
  if(str.length <= 8) {
    return ''
  }
  else return result
}

console.log(swap4('yt'))


/*
Swap First and Last Words 
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns 
the string back with its first and last words swapped when invoked. 
NOTE: Return empty string if the given string does not have 2 or more words. 
 
Examples: 
swapFirstLastWord("Hello World")      -> "World Hello" 
swapFirstLastWord("I like JavaScript")   -> "JavaScript like I" 
swapFirstLastWord("foo bar foo bar")     -> "bar bar foo foo" 
swapFirstLastWord("")         -> "" 
swapFirstLastWord("  ")         -> "" 
swapFirstLastWord("Hello")        -> "" 
swapFirstLastWord("Hello   ")       -> "" 
*/ 

function swapFirstLastWord(str) {
  let strArr = str.split(' ');
  let firstWord = strArr[0];
  let lastWord = strArr[strArr.length - 1];
  strArr[0] = lastWord
  strArr[strArr.length - 1] = firstWord
  return strArr.join(' ')
}

console.log(swapFirstLastWord('bar foo bar foo'))


/*
Count Positive Numbers 
Write a function named countPos() which takes an array of numbers as an argument and returns how 
many elements are positive when invoked.  
 
Examples: 
countPos([-45, 0, 0, 34, 5, 67])     -> 3 
countPos([-23, -4, 0, 2, 5, 90, 123])   -> 4 
countPos([0, -1, -2, -3])       -> 0 
*/ 

function countPos(arr) {
  let posCounter = 0;
  for(const pos of arr) {
    if(pos > 0) {
      posCounter++
  }
}
  return posCounter
  
}

console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))



 /*
Find Even Numbers 
Write a function named as getEvens() which takes 2 number arguments and returns all the even 
numbers as an array stored from smallest even number to greatest even number when invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even 
numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers.  
Examples: 
getEvens(2, 7)    -> [ 2, 4, 6 ] 
getEvens(17, 5)    -> [ 6, 8, 10, 12, 14, 16 ] 
getEvens(4, 4)    -> [ 4 ] 
getEvens(3, 3)    -> [ ] 
*/

function getEven(num, num2) {
  let even = [];
  let start = Math.min(num, num2);
  let end = Math.max(num, num2);
  for(let i = start; i <= end; i++){
    if(i % 2 === 0){
      even.push(i)
    }
  }
  return even;
}

console.log(getEven(2, 7))


/*
Find Numbers Divisible By 5 
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers 
divisible by 5 as an array stored from first found match to last found match when invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no 
numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
Examples: 
getMultipleOf5(3, 17)    -> [ 5, 10, 15] 
getMultipleOf5(23, 5)    -> [ 20, 15, 10, 5 ] 
getMultipleOf5(5, 5)      -> [ 5 ] 
getMultipleOf5(2, 4)      -> [ ] 
*/

function getMultipleOf5(num, num2) {
  let result = [];
  let start = Math.min(num, num2);
  let end = Math.max(num, num2);

  for(let i = start; i < end; i++) {
    if(i % 5 === 0) {
      result.push(i);
    } 
  }
  return result;
}

console.log(getMultipleOf5(3, 17))
 
/*
Count Negative Numbers 
Write a function named countNeg() which takes an array of numbers as an argument and returns how 
many elements are negative when invoked.  
Examples: 
countNeg([-45, 0, 0, 34, 5, 67])     -> 1 
countNeg([-23, -4, 0, 2, 5, 90, 123])   -> 2 
countNeg([0, -1, -2, -3])       -> 3 
*/

function countNeg(arr) {
  let countNum = 0;
  for(const num of arr) {
    if(i < 0) {
      countNum++
    }
  }
  return countNum
}

console.log(countNeg([-45, 0, 0, 34, 5, 67]))

/*
Count A 
Write a function named countA() which takes a string argument and returns how many A or a there are 
in the given string when invoked. 
NOTE: Ignore case sensitivity.  
Examples: 
countA("TechGlobal is a QA bootcamp")       -> 4 
countA("QA stands for Quality Assurance")     -> 5 
countA("Cypress")             -> 0 
*/

function countA(str) {
  let aCounter = 0;
  for(let i = 0; i <= str.length - 1; i++) {
    if(str[i] === 'A' || str[i] === 'a') {
      aCounter++
    }
  }
  return aCounter
}

console.log(countA('TechGlobal is a QA bootcamp'))


/*
Count Words 
Write a function named countWords() which takes a string argument and returns the total count of 
words in the given string when invoked. 
NOTE: Be careful about the extra whitespaces before and after the string. 
 
Examples: 
countWords("     Javascript is fun       ")         -> 3 
countWords("Cypress is an UI automation tool.    ")     -> 6  
countWords("1 2 3 4")             -> 4 
*/ 

function countWords(str) {
  str = str.trim()

  const parts = str.split(' ');
  const words = parts.filter(word => word !== '');

  return words.length
}

console.log(countWords("     Javascript is fun       "))
 
/*
Factorial 
Write a function named as factorial() which takes a number as an argument and returns the factorial of 
the number when invoked. 
NOTE: Mathematically, the factorial of a non-negative integer n is defined as: 
n! = n × (n-1) × (n-2) × ... × 2 × 1 
Assume you will not be given a negative number. 
Examples: 
factorial(5)     -> 120 
factorial(4)    -> 24 
factorial(0)    -> 1 
factorial(1)    -> 1 
*/

function factorial(num) {
  let total = 1
  for(let i = num; i >= 1; --i) {
    total *= [i]
  }
  return total
}

console.log(factorial(5))



/*
Count 3 or Less 
Write a function named as count3OrLess() which takes a string word as an argument and returns the 
count of the words that has 3 characters or less when invoked. 
 
Examples: 
count3OrLess("Hello")         -> 0 
count3OrLess("Hi John")         -> 1 
count3OrLess("JavaScript is fun")       -> 2 
count3OrLess("My name is John Doe")     -> 3 
count3OrLess("")           -> 0 
*/

function count30Less(str) {
  const words = str.split(' ')
  const newWord = words.filter(word => word !== '' && word.length <= 3)
  return newWord.length
}

console.log(count30Less('Hi John name hi hi '))
 
/*
Remove Extra Spaces 
Write a function named as removeExtraSpaces() which takes a string word as an argument and 
returns the string back with all extra spaces removed when invoked. 
 
Examples: 
removeExtraSpaces("Hello")           -> "Hello" 
removeExtraSpaces("    Hello    World  ")       -> "Hello World" 
removeExtraSpaces("   JavaScript is        fun")    -> "JavaScript is fun” 
removeExtraSpaces("")             -> ""  
*/ 

function removeExtraSpaces(str) {
  let word = str.trim()
  const words = str.split(' ').filter(word => word !== '')
  return words.join(' ')
  
}

console.log(removeExtraSpaces('    Hello    World  '))
 
/*
Middle Number 
Write a function named middleInt() which takes three number arguments and return the middle 
number. 

This problem literally just asks for the middle number between the min and the max. dont over think it 
 
Examples: 
middleInt(1, 2, 2)     -> 2 
middleInt(5, 5, 8)     -> 5 
middleInt(5, 3, 5)     -> 5 
middleInt(1, 1, 1)     -> 1 
middleInt(-1, 25, 10)   -> 10 
*/


function middleInt(num, num2, num3) {
  const nums = [num, num2, num3];
  nums.sort((x, y) => x -y)
  return nums[1]
}

console.log(middleInt(5, 1, 7))
 
 
/*
First Duplicate Element 
Write a function named as firstDuplicate() which takes an array argument and returns the first 
duplicated number in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the 
array. For two elements to be considered as duplicated, value and data types of the elements must be 
same. 
 
Examples: 
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])      -> 3 
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])      -> 7 
firstDuplicate([ 5, '5', 3, 7, 4 ])      -> -1 
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])    -> 'abc' 
firstDuplicate([ 1, 2, 3])        -> -1 
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])     -> -1 
*/ 

function firstDuplicate(arr) {
  let dup = []
  for(let i = 0; i <= arr.length; i++) {

    for(let j = 0; j <= dup.length; j++) {
      if(arr[i] === dup[j]) return arr[i]
    }
    dup.push(arr[i])
  }
   return -1
}

console.log(firstDuplicate(([ 5, 7, 7, 0, 5, 10 ]) ))
 
/*
Find All Duplicate Elements 
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated 
elements in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return empty array if there are no 
duplicates in the array. For two elements to be considered as duplicated, value and data types of the 
elements must be same. 
 
Examples: 
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])      -> [ 0, -7 ] 
getDuplicates([ 1, 2, 5, 0, 7 ])          -> [ ] 
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])    -> [ 'foo', 'a’ ] 
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])       -> [ ] 
*/ 





/*
Count Vowels 
Write a function named as countVowels() which takes a string word as an argument and returns the 
count of the vowel letters when invoked. 
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i 
 
Examples: 
countVowels("Hello")       -> 2 
countVowels("JavaScript is fun")    -> 5 
countVowels("")         -> 0 
*/ 

function countVowel(str) {
  let count = 0;
  let vowel = 'aeiouAEIOU'
  for(const has of str) {
    if(vowel.includes(has)) {
      count++
    }
  }
  return count
}

console.log(countVowel('Hello'))

/*
Reverse String Words 
Write a function named as reverseStringWords() which takes a string as an argument and returns 
string back with each word separately reversed when invoked. 
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before 
and after words in the given string. 
 
Examples: 
reverseStringWords("Hello World")      -> "olleH dlroW" 
reverseStringWords("I like JavaScript")     -> "I ekil tpircSavaJ" 
reverseStringWords("Hello")       -> "olleH" 
reverseStringWords("")         -> "" 
reverseStringWords(" ")         -> "" 
*/

function reverseStringWords(str) {
  const words = str.split(' ')
  const reversedWords = []
  for(const word of words) {
    const result = word.split('').reverse().join('')
    reversedWords.push(result)
  }
  return reversedWords.join(' ')
}

console.log(reverseStringWords('Hello World'))
 
 /*
Count Consonants 
Write a function named as countConsonants() which takes a string word as an argument and returns 
the count of the consonant letters when invoked. 
NOTE: A letter that is not vowel is considered as a consonant letter. 
 
Examples: 
countConsonants("Hello")         -> 3 
countConsonants("Hello World")       -> 8 
countConsonants("JavaScript is fun")     -> 12 
countConsonants("")         -> 0 
*/ 


 
 
 
Count Multiple Words 
Write a function named as countMultipleWords() which takes an array as an argument and returns the 
count of the elements that has multiple words when invoked. 
NOTE: Be careful about the extra whitespaces before and after the array element. 
 
Examples: 
countMultipleWords([ "foo", "", "  ", "foo bar", "   foo" ])     -> 1 
countMultipleWords([ "foo", "bar", "foobar", "   foobar   " ])     -> 0 
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ])     -> 4 
countMultipleWords([ ])               -> 0 
 
/*
FizzBuzz 
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed 
with below requirements when invoked. 
•  You need to find all the numbers within the range of given 2 numbers (both inclusive) and store 
them in a string from smallest to greatest number with a ' | ' separator for each number. 
•  You will need to convert numbers divisible by 3 to 'Fizz' 
•  You will need to convert numbers divisible by 5 to 'Buzz' 
•  You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’ 
•  The rest will stay the same. 
NOTE: Make your code dynamic that works for any numbers. 
Assume you will not be given negative numbers. 
 
Examples: 
fizzBuzz(13, 18)    -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)    -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz" 
fizzBuzz(5, 5)    -> "Buzz" 
fizzBuzz(9, 6)    -> "Fizz | 7 | 8 | Fizz"
*/ 

function fizzBuzz(num, num2) {
  let result = []
  let start = Math.min(num, num2);
  let end = Math.max(num, num2);
  for(let i = start; i < end; i++) {
    if(i % 3 === 0) {
      result.push('Fizz');
    } else if(i % 5 === 0) {
      result.push('Buzz');
    } else if(i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    }
  }
  return result
}

console.log(fizzBuzz(9, 6))
 
 
Palindrome 
Write a function named as isPalindrome() which takes a string word as an argument and returns true if 
the word is palindrome or returns false otherwise when invoked. 
NOTE: Palindrome: It is a word that is read the same backward as forward 
Examples: kayak, civic, madam 
 www.techglobalschool.com 
 
  25 
NOTE: your function should ignore case sensitivity 
 
Examples: 
isPalindrome("Hello")   -> false 
isPalindrome("Kayak")   -> true 
isPalindrome("civic")   -> true 
isPalindrome("abba")   -> true 
isPalindrome("ab  a")   -> false 
isPalindrome("123454321")   -> true 
isPalindrome("A")   -> true 
isPalindrome("")   -> true 
 
 
 
Prime Number 
Write a function named as isPrime() which takes a number as an argument and returns true if the 
number is prime or returns false otherwise when invoked. 
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be 
divided by any other number. The smallest prime number is 2 and 2 is the only even prime number. 
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31... 
NOTE: The smallest prime number is 2 and there is no negative prime numbers. 
 
Examples: 
isPrime(5)   -> true 
isPrime(2)   -> true 
isPrime(29)   -> true 
isPrime(-5)  -> false 
isPrime(0)  -> false 
isPrime(1)  -> false 
 
 
Add Two Arrays 
Write a function named add() which takes two array of numbers as argument and returns a new array 
with sum of given arrays elements. 
NOTE: Be careful about the array sizes as they could be different. 
 
Examples: 
add([3, 0, 0, 7, 5, 10], [6, 3, 2])         -> [9, 3, 2, 7, 5, 10] 
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])     -> [16, 11, 9,  3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])         -> [0, 0, 0, 0] 
 
 
 www.techglobalschool.com 
 
  26 
No Elements With A 
Write a function named noA() which takes an array of strings as argument and will return a new array 
with all elements starting with "A" or "a" replaced with "###". 
 
Examples: 
noA(["javascript", "hello", "123", "xyz"])     ->  ["javascript", "hello", "123", "xyz"] 
noA(["apple", "123", "ABC", "javascript"])     ->  ["###", "123", "###", "javascript"] 
noA(["apple", "abc", "ABC", "Alex", "A"])     ->  ["###", "###", "###", "###", "###"] 
 
 
No Elements Divisible By 3 and 5 
Write a function named no3and5() which takes an array of integer numbers as argument and will return 
a new array with elements replaced by conditions below. 
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101 
 
Examples: 
no3and5([7, 4, 11, 23, 17])       -> [7, 4, 11, 23, 17] 
no3and5([3, 4, 5, 6])       -> [100, 4, 99, 100] 
no3and5([10, 11, 12, 13, 14, 15])     -> [99, 11, 100, 13, 14, 101] 
 
 
No Elements Equals 13 
Write a function named no13() which takes an array of numbers as argument and return a new array 
with all 13s replaced with 0s.  
 
Examples: 
no13([1, 2, 3 ,4])       -> [1, 2, 3 ,4]  
no13([13, 2, 3])       -> [0, 2, 3] 
no13([13, 13, 13 , 13, 13])     -> [0, 0, 0, 0, 0] 
no13([])         -> [] 
 
 
Remove Duplicates 
Write a function named removeDuplicates() which takes an array argument and returns a new array 
with all the duplicates removed. 
 
Examples: 
 www.techglobalschool.com 
 
  27 
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])      -> [10, 20, 35, 60, 70] 
removeDuplicates([1, 2, 5, 2, 3])           -> [1, 2, 5, 3] 
removeDuplicates([0, -1, -2, -2, -1])         -> [0, -1, -2] 
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"] 
removeDuplicates(["1", "2", "3", "2", "3"])         -> ["1", "2", "3"] 
 
 
 
No Digits 
Write a function named noDigit() which takes a string argument and returns a new string with all digits 
removed from the original string. 
 
Examples: 
noDigit("")           -> "" 
noDigit("Javascript")       -> "Javascript" 
noDigit("123Hello")         -> "Hello" 
noDigit("123Hello World149")     -> "Hello World” 
noDigit("123Tech456Global149")     -> "TechGlobal" 
 
/*
No Vowel 
Write a function named noVowel() which takes a string argument and returns a new string with all 
vowels removed from the original string. 
 
Examples: 
noVowel("TechGlobal")   -> "TchGlbl" 
noVowel("AEOxyz")   -> "xyz" 
noVowel("Javascript")   -> "Jvscrpt" 
noVowel("")   -> "" 
noVowel("125$")   -> "125$" 
*/ 
 
/* 
Sum Of Digits 
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from 
the original string.  
 
Examples: 
sumOfDigits("Javascript")       -> 0 
sumOfDigits("John’s age is 29")     -> 11 
sumOfDigits("$125.0")       -> 8 
 www.techglobalschool.com 
 
  28 
sumOfDigits("")         -> 0 
*/
 
 
 
 /*
Array Factorial 
Write a function named arrFactorial() which takes an array of numbers as argument and return the 
array with every number replaced with their factorials. 
 
Examples: 
arrFactorial([1, 2, 3 ,4])     -> [1, 2, 6, 24] 
arrFactorial([0, 5])       -> [1,120] 
arrFactorial([5 , 0, 6])     -> [120, 1, 720] 
arrFactorial([])       -> []
*/ 