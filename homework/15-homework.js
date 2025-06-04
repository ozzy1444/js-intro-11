/*
Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters 
and spaces
Examples:
toCamelCase("first name")  ->"firstName"
toCamelCase("last     name")  ->"lastName"
toCamelCase("   ZIP CODE")  ->"zipCode"
toCamelCase(“I Learn Java Script”)    -> "iLearnJavaScript"
toCamelCase(“helloWorld”)     -> “helloWorld”
*/ 

function toCamelCase(str) {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return words.join('');
}

console.log(toCamelCase('I Learn Java Script'));


/*
Task-2
Requirement:
Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters 
and spaces
NOTE: In snake case words are separated by underscores (_) and are all 
lowercase.
Examples:
toSnakeCase("first name")  ->"first_name"
toSnakeCase("last    name")  ->"last_name"
toSnakeCase("    I love Java Script")  ->"i_love_java_script"
toSnakeCase("already_snake_case")   -> "already_snake_case"
toSnakeCase("hello")     -> "hello"
*/ 

function toSnakeCase(str) {
    let words = str.split('');

    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0] + '_' + words[i].slice(1).toLowerCase().trim();
    }

    return words.join('');
}

console.log(toSnakeCase('I    Love Java Script'));

/*
Task-3
Requirement:
Write a function named alternatingCases() which takes a string argument and 
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are 
ignored.
Examples:
alternatingCases("Hello")  -> "HeLlO"
alternatingCases("basketball")  -> "BaSkEtBaLl"
alternatingCases("Tech Global")  -> "TeCh GlObAl"
alternatingCases("")  -> ""
alternatingCases("123!@#aB")  -> "123!@#Ab"
*/ 

function alternatingCases(str) {
    let words = str.split('');
    let results = ''

    for(let i = 0; i < words.length; i++) {
        if(words[i].length % 2 === 0) {
            results += words[i].toUpperCase
        } else {
            results += words[i].toLowerCase()
        }
    }

    return words.join('')
}

console.log(alternatingCases('Tech Global'))

/*
Task-4
Requirement:
Write a function named isNeutral() that takes two strings comprised of + and 
-, and return a new string which shows how the two strings interact in the 
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are 
shown as the number 0.
Note: The two strings will be the same length.
Examples
isNeutral("-", "+")      ->  "0"
isNeutral("-+", "-+")  ->   "-+"
isNeutral("-++-", "-+-+")            ->  "-+00"
isNeutral("--++--", "++--++")      ->  "000000"
isNeutral("+++", "+++")            ->  "+++"
*/

function isNeutral(str1, str2) {
  let result = "";

  for (let i = 0; i < str1.length; i++) {
    let a = str1[i];
    let b = str2[i];

    if (a === "+" && b === "+") {
      result += "+";
    } else if (a === "-" && b === "-") {
      result += "-";
    } else {
      result += "0"; // one is +, the other is -
    }
  }

  return result;
}

console.log(isNeutral("-++-", "-+-+"))

/* 
Task-5
Requirement:
Write a function named isTrueOrFalse() which takes a string with sets of character/words 
separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should 
be treated the same), you need to determine whether it falls into the positive/first half of the 
alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or 
equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
Examples
isTrueOrFalse("A big brown fox caught a bad rabbit")  -> true
isTrueOrFalse("Xylophones can obtain Xenon.")    ->  false
isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")  -> true
isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")  -> true
isTrueOrFalse("Got stuck in the Traffic")  -> false
*/

function isTrueOrFalse(str) {
    let firstHalf = ['ABCDEFGHIJKLM']
    let secondHalf = ['NOPQRSTUVWXYZ']
    let firstHalfCount = 0;
    let secondHalfCount = 0;

    let words = str.split(' ');

    for(const word of words) {
        if(words[word].slice(0, 1).includes(firstHalf)) {
            firstHalfCount++
        } else {
            secondHalfCount++
        }
    };

    if(firstHalfCount > secondHalfCount) {
}
}

console.log(isTrueOrFalse("Got stuck in the Traffic"));