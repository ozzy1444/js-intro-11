/*
Write a function named countVC() which takes a string argument and returns 
an object with the count of vowels and consonants.
Examples:
countVC("Hello")               -> {vowels: 2, consonants: 3}
countVC("Programming")   -> {vowels: 3, consonants: 8}
countVC("123AbC")               -> {vowels: 1, consonants: 2}
countVC("123!@#xyz")             -> {vowels: 0, consonants: 3}
countVC("")                           -> {vowels: 0, consonants: 0}
*/

function countVC(str) {
    const lower = str.toLowerCase()
    const vowelChar = new Set(['a', 'e', 'i', 'o', 'u'])

    let vowel = 0;
    let consonant = 0;

    for (const char of lower) {
        if (vowelChar.has(char)) {
            vowel++;
        } else {
            consonant++
        }
    }
    return { vowel, consonant }
}

console.log(countVC("123AbC"));

/*
Task-2
Requirement:
Write a function named countChars() which takes a string argument and 
returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also 
spaces do not count towards any category
Examples:
countChars("Hello")                           -> {letters: 5}
countChars("Programming 123")   -> {letters: 11, numbers: 3}
countChars("123AbC!@#")               -> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")               -> {numbers: 10}
countChars("     ")                                  -> {}
countChars("")                                       -> {}
*/

function countChars(str) {
    letters = 0;
    numbers = 0;
    specials = 0;

    for (const char of str) {
        if (char > 65 && char < 90 && char > 97 && char < 122) {
            letters++
        } else if (char > 49 && char < 57) {
            numbers++
        } else {
            specials++
        }
    }

    return { letters, numbers, specials }
}

console.log(countChars("123AbC!@#"))

/*
Task-3
Requirement:
Write a function named maxOccurrences() which takes a string argument and 
returns the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is 
case sensitive. Ignore spaces. If the string is empty or consist of spaces only, 
then return an empty string.
Examples:
maxOccurrences("Hello")             -> "l"
maxOccurrences("Occurrences")  -> "c"
maxOccurrences("    ab    ")      -> "al"
maxOccurrences("12   3   21")    -> "1"
maxOccurrences("      ")      -> ""
maxOccurrences("")    -> ""
*/

function maxOccurrences(str) {
    let charCounter = {}
    let maxChar = ''
    let maxCount = 0

    for (let char of str) {
        if (charCounter[char]) {
            charCounter[char]++;
        } else {
            charCounter[char] = 1
        }

    }
    return charCounter
}

console.log(maxOccurrences('Hello'))


/*
Task-4
Requirement:
Write a function named starOut() which takes a string argument and returns it 
back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Examples:
starOut("ab*cd")  -> "ad"
starOut("ab**cd")  -> "ad"
starOut("xm*sm*sy")  -> "xy"
starOut("abc")     -> "abc"
starOut("***")    -> ""
starOut("   ")      -> "   "
starOut("")    -> ""
*/

function starOut(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '*' || str[i - 1] === '*' || str[i + 1] === '*') {
            continue;
        }
        result += str[i];
    }

    return result;
}

console.log(starOut("ab*cd"));


/*
Task-5
Requirement:
Write a function named romanToInt() which takes a string roman numeral as 
its arguments and return the roman numeral converted to the number. A roman 
numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 
112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
Examples:
romanToInt("I")  -> 1
romanToInt("IV")  -> 4
romanToInt("CXII")  -> 112
romanToInt("MMM")  -> 3000
romanToInt("MMMDCCCLXXXVIII")   -> 3888
romanToInt("MDCLXVI")    -> 1666
*/ 

function romanToInt(str) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < str.length; i++) {
        const current = romanMap[str[i]];
        const next = romanMap[str[i + 1]];

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}