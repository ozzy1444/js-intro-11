/*
Find if a number is even or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is even, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
2   -> true 
5   -> false 
10   -> true
*/ 

let ran1 = Math.round(Math.random() * (10 - 1)) + 1; 
console.log(ran1)
console.log(ran1 % 2 === 0); 




/*
Find if a number is odd or not. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is odd, print true. 
Otherwise, print false. 
 
Examples: 
1   -> true 
2   -> false 
5   -> true 
10   -> false 
*/

 /*
Find if a number is positive or not. 
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is positive, print true. 
Otherwise, print false. 
 
Examples: 
-5   -> false 
-1   -> false 
0   -> false 
1   -> true 
5   -> true 
*/

let ran1 = Math.round(Math.random() * (5 - -5)) + -5; 

console.log(ran1)
console.log(ran1 % 2 === 0); 
 
 
 
 
 
/*
Find if a number is negative or not. 
Write a program that generates a random number between -5 and 5 (both inclusive). 
If the random number is negative, print true. 
Otherwise, print false. 
 
Examples: 
-5   -> true 
-1   -> true 
0   -> false 
1   -> false 
5   -> false
*/

 
Find if a number is divisible by 5 or not. 
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 5, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
5   -> true 
20   -> true 
37   -> false 
50   -> true 
 
Find if a number is divisible by 7 or not. 
Write a program that generates a random number between 1 and 50 (both inclusive). 
If the random number is divisible by 7, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
7   -> true 
35   -> true 
49   -> true 
50   -> false 
 
 
 
 
 www.techglobalschool.com 
 
/*
Calculate the sum of 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the sum of the numbers and print it. 
 
Examples: 
3, 5     -> 8 
7, 3    -> 10 
5, 5     -> 10 
1, 10     -> 11 
10, 1     -> 11 
*/

let sumOfRan = (Math.round(Math.random() * (10 - 1)) + 1) + (Math.round(Math.random() * (10 - 1)) + 1)

console.log(sumOfRan); 




 /*
Calculate the absolute difference between 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the absolute difference of the numbers and print it. 
 
Examples: 
3, 5     -> 2 
7, 3    -> 4 
5, 5     -> 0 
1, 10     -> 9 
10, 1     -> 9 
*/ 

console.log((Math.round(Math.random() * (10 - 1)) + 1) - (Math.round(Math.random() * (10 - 1)) + 1));

 

Calculate the product of 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Calculate the product of the numbers and print it. 
 
Examples: 
3, 5     -> 15 
7, 3    -> 21 
5, 5     -> 25 
1, 10     -> 10 
10, 1     -> 10 

 

 
  14 
Calculate the square of a number. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the square of the number and print it. 
 
Examples: 
1   -> 1 
2   -> 4 
5   -> 25 
10   -> 100 
 
Calculate the cube of a number. 
Write a program that generates a random number between 1 and 10 (both inclusive). 
Calculate the cube of the number and print it. 
 
Examples: 
1   -> 1 
2   -> 8 
5   -> 125 
10   -> 1000 
 
/*
Convert miles to kilometers. 
Write a program that generates a random number between 1 and 10 (both inclusive) to be considered 
as a mile unit. 
Convert miles unit to kilometers and print it. 
Please assume that 1 mile equals 1.6 kilometers. 
 
Examples: 
1   -> 1.6 
2   -> 3.2 
5   -> 8 
*/

let mileToMeter = (Math.round(Math.random() * (10 - 1)) + 1) * 1.6; 

console.log(mileToMeter); 


 
 
 
 
 
 
 
 www.techglobalschool.com 
 
  15 
Convert kilograms to pounds. 
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as a kilogram unit. 
Convert kilogram unit to pounds and print it. 
Please assume that 1 kilogram equals 2.2 pounds. 
 
Examples: 
1   -> 2.2 
20   -> 44 
75   -> 165 
100   -> 220 
 
 
Find if 2 numbers are equal or not. 
Write a program that generates 2 random numbers between 1 and 3 (both inclusive). 
If the numbers are equal, print true. 
Otherwise, print false. 
 
 
Examples: 
1, 1     -> true 
1, 2    -> false 
2,3     -> false 
2,2     -> true 
3, 3     -> false 
 
Find if an age is allowed to get Driver License or not. 
Write a program that generates a random number between 1 and 100 (both inclusive) to be considered 
as an age. 
If the age is more than or equal to 16, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
15   -> false 
16   -> true 
45   -> true 
100   -> true 
 
  16 
Find the greatest number between 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Find the greatest of the numbers and print it. 
 
Examples: 
3, 5     -> 5 
7, 3    -> 7 
5, 5     -> 5 
1, 10     -> 10 
10, 1     -> 10 
 
Find the greatest number between 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Find the greatest of the numbers and print it. 
 
Examples: 
3, 5, 2     -> 5 
7, 3, 1    -> 7 
5, 5, 5     -> 5 
1, 10, 9    -> 10 
10, 1, 2    -> 10 
 
Find the smallest number between 2 random numbers. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
Find the smallest of the numbers and print it. 
 
Examples: 
3, 5     -> 3 
7, 3    -> 3 
5, 5     -> 5 
1, 10     -> 1 
10, 1     -> 1 
 
 
 
 
 
 
 
  17 
Find the smallest number between 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Find the smallest of the numbers and print it. 
 
Examples: 
3, 5, 2     -> 2 
7, 3, 1    -> 1 
5, 5, 5     -> 5 
1, 10, 9    -> 1 
10, 1, 2    -> 1 
 
Calculate the average of 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the average of the numbers and print it. 
 
Examples: 
3, 5, 7     -> 5 
7, 3, 2    -> 4 
5, 5, 5     -> 5 
1, 10, 7    -> 6 
10, 1, 1    -> 4 
 
Calculate the absolute difference between max and min of 3 random numbers. 
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference. 
 
Examples: 
3, 5, 2     -> 3 
7, 3, 1    -> 6 
5, 5, 5     -> 0 
1, 10, 9    -> 9 
10, 1, 2    -> 9 
 
 
 
 
 
  
/*
Find the quarter of a random number between 1 and 100. 
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which quarter of the range the number falls into and print it. 
1st quarter is 1-25 
2nd quarter is 26-50 
3rd quarter is 51-75 
4th quarter is 76-100 
 
Examples: 
15     -> 1st quarter 
73    -> 3rd quarter 
39     -> 2nd quarter 
87     -> 4th quarter 
*/

let ran = Math.round(Math.random() * (100 - 1)) + 1;

console.log(ran);

if(ran <= 25){
 console.log('1st quarter');
} else if(ran <= 50){
  console.log('2nd quarter');
} else if(ran <= 75){
  console.log('3rd quarter');
} else {
  console.log('4th quarter')
}




 
Find the midpoint of a random number between 1 and 100. 
Write a program that generates a random number between 1 and 100 (both inclusive). 
Find which half of the range the number falls into and print it. 
1st half is 1-50 
2nd half is 51-100 
 
Examples: 
15     -> 1st half 
50    -> 1st half 
51     -> 2nd half  
87     -> 2nd half  
100     -> 2nd half  
 
/*
Find if sum of 2 random numbers is even or not. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
If the sum of the random numbers is even, print true. 
Otherwise, print false. 
 
Examples: 
3, 5     -> true 
7, 3    -> true 
5, 5     -> true 
1, 10     -> false 
10, 1     -> false 
*/
let sum = (Math.round(Math.random() * (10 - 1)) + 1) + (Math.round(Math.random() * (10 - 1)) + 1);

console.log(sum);
console.log(sum % 2 === 0); 




/*
Find if product of 2 random numbers is odd or not. 
Write a program that generates 2 random numbers between 1 and 10 (both inclusive). 
If the product of the random numbers is odd, print true. 
Otherwise, print false. 
 
Examples: 
3, 5     -> true 
7, 3    -> true 
5, 5     -> true 
1, 10     -> false 
10, 1     -> false 
*/
let product = (Math.round(Math.random() * (10 - 1)) + 1) * (Math.round(Math.random() * (10 - 1)) + 1);

console.log(product);

console.log(!(product % 2 === 0))
 
/*
Area of a rectangle 
Write a function named as rectangleArea()which calculates the area of a rectangle when invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Area = x * y 
 
Examples: 
rectangleArea(5, 4)   -> 20 
rectangleArea(3, 7)   -> 21 
rectangleArea(6, 10)   -> 60 
*/
function rectangleArea(width, length){
  let area = width * length
  return area
}

console.log(rectangleArea(5, 7))
 
/*
Perimeter of a rectangle. 
Write a function named as rectanglePerimeter() which calculates the perimeter of a rectangle when 
invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Perimeter = 2 * (x + y) 
 
Examples: 
rectanglePerimeter(5, 4)   -> 18 
rectanglePerimeter(3, 7)   -> 20 
rectanglePerimeter(6, 10)   -> 32 
*/
function rectanglePerimeter(width, length){
  let perimeter = 2 * (width + length);
  return perimeter
}

console.log(rectanglePerimeter(1, 5))
 
 
 
 
 
 
 
  20 
Area of a square 
Write a function named as squareArea() which calculates the area of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula:Area = x * x 
 
Examples: 
squareArea(5)   -> 25 
squareArea(3)   -> 9 
squareArea(6)   -> 36 
 
Perimeter of a square. 
Write a function named as squarePerimeter() which calculates the perimeter of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula: Perimeter = 4 * x 
 
Examples: 
squarePerimeter(5)   -> 20 
squarePerimeter(3)   -> 12 
squarePerimeter(6)   -> 24 
 
Double The Word 
Write a function named as doubleWord() which takes a string word as an argument and returns the 
given word back doubled when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
doubleWord("Tech")    -> "TechTech" 
doubleWord("Global")     -> "GlobalGlobal" 
 
First Character 
Write a function named as firstCharacter() which takes a string word as an argument and returns the 
first character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
firstCharacter("Tech")    -> "T" 
firstCharacter("Global")   -> "G" 
 


First Two Characters 
Write a function named as firstTwoCharacters() which takes a string word as an argument and returns 
the first two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the given string back. 
 
Examples: 
firstTwoCharacters("Tech")    -> "Te" 
firstTwoCharacters("Global")     -> "Gl" 
firstTwoCharacters("")      -> "" 
firstTwoCharacters(" ")      -> " " 
firstTwoCharacters("1")     -> "1" 

function firstTwoCharacters(word) {
    return word.slice(0, 2)
}

console.log(firstTwoCharacters(''))
 
Last Character 
Write a function named as lastCharacter() which takes a string word as an argument and returns the last 
character of the given word when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
lastCharacter("Tech")    -> "h" 
lastCharacter("Global")    -> "ll" 
lastCharacter(" ")    -> " " 
lastCharacter("123")     -> "3" 
 
Last Two Characters 
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
the last two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
 
Examples: 
lastTwoCharacters("Tech")  -> "ch" 
lastTwoCharacters("Global")   -> "al" 
lastTwoCharacters("")    -> "" 
lastTwoCharacters(" ")    -> " " 
lastTwoCharacters("1")    -> "1" 
 
 
 
 
/*
First and Last Characters 
Write a function named as firstLast() which takes a string word as an argument and returns the first and 
the last characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
 
Examples: 
firstLast("Tech")    -> "Th" 
firstLast("TechGlobal")     -> "Tl" 
firstLast("")      -> "" 
firstLast(" ")      -> " " 
firstLast("1")       -> "1" 
firstLast("abcde")     -> ae 
*/

function firstLast(word){
  if(word.length <= 2){
    return word
  } else{
    return (word.slice(0, 1)) + (word.at(-1))
  }
}

console.log(firstLast('Tech'))

 
Has Five 
Write a function named as hasFive() which takes a string word as an argument and returns true if given 
string has at least 5 characters, and false otherwise when invoked. 
 
Examples: 
hasFive("Tech")   -> false 
hasFive("Global")   -> true 
hasFive("")    -> false 
hasFive("12345")   -> true 
hasFive("hello")   -> true 
 
/*
Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked. 
NOTE: If the given word is empty, then return the empty string back. 
 
Examples: 
middle("Tech")    -> "ec" 
middle("Global")   -> "ob" 
middle("abcde")   -> "c" 
middle("1")     -> "1" 
middle("abc")     -> "b" 
middle(“1234”)    -> "23" 
*/

function middle(word){
  let middle = word
}
 
 

 
 /*
Longer String 
Write a function named as longer() which takes two string words as arguments and returns the string 
that has more characters when invoked. 
NOTE: If both of the words have the same length, then return the first string. 
 
Examples: 
longer("Tech", "Global")  -> "Global" 
longer("Hello", "Hi")    -> "Hello" 
longer("Hello", "World")  -> "Hello"
*/

function longer(word, word1){
  if(word.length > word1.length){
    return word
  } else if(word.length < word1.length){
    return word1
  }
  else return word
}

console.log(longer('Tech', 'Aziz'))
 
 
Shorter String 
Write a function named as shorter() which takes two String words as arguments and returns the String 
has less characters when invoked. 
NOTE: if both of the words have the same length, then return the second String. 
 
Examples: 
shorter("Tech", "Global")  -> "Tech" 
shorter("Hello", "Hi")    -> "Hi" 
shorter("Hello", "World")  -> "World" 

function shorter(str, str2){
    let short = str.length > str2.length; 
}
 
 /*
Concat Two String 
Write a function named as concat() which takes two string words as arguments and returns the words 
concatenated when invoked. 
NOTE: Concatenation should always be as first string + second string .  
 
Examples: 
concat("Tech", "Global")  -> "TechGlobal" 
concat("Hello", "World")  -> "HelloWorld" 
concat("", "abc")    -> "abc" 
concat("123", "1234")    -> "1231234" 
*/

function concat(word3, word4){
  return word3.concat(word4);
}

console.log(concat('Aziz', 'Atieh'));

 
 
 
 
  24 
Starts With Vowel 
Write a function named as startsVowel() which takes a string word as an argument and returns true if 
given string starts with a vowel letter, and false otherwise when invoked. 
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i. 
 
Examples: 
startsVowel("Tech")    -> false 
startsVowel("Apple")     -> true 
startsVowel("abc")     -> true

function startVowel(word){
  
}
