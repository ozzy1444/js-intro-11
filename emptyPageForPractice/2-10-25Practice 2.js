/*
Task02

Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.
NOTE: if the character is not a letter or digit, print "INVALID INPUT"

Test data 1: "v"
Expected result 1:
"v"  is a letter

Test data 2: "5"
Expected result 2:
"5"  is a digit

Test data 3: "$"
Expected result 3:
INVALID INPUT
*/

function letterOrDigit(character) {
    if(character === Number())
        return `${character} is a letter`
    else if(chatacter === parseInt())
        return `${character} is a digit`
    else 
    return ('INVALID INPUT')
}

console.log(character('Dog'))
console.log(character(5))

let char2 = 'b'
/*
Task02

Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.
NOTE: if the character is not a letter or digit, print "INVALID INPUT"

Test data 1: "v"
Expected result 1:
"v"  is a letter

Test data 2: "5"
Expected result 2:
"5"  is a digit

Test data 3: "$"
Expected result 3:
INVALID INPUT
*/

let char1 = 'b';
let char1Code = char1.charCodeAt()

if(char1Code >= 48 && char1Code <= 57) {
    console.log(`'${char1} is a digit`);
}
else if((char1Code >= 65 && char1Code <= 90) || (char1Code >= 97 && char1Code <= 122)) {
    console.log(`'${char1} is a letter`);
}
else {
    console.log('INVALID INPUT')
}

/*
Task03

Requirement:
Assume you are given a single character.
Find if the given character is a lowercase or an 
uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"

Test data 1: "a"
Expected result 1:
"a" is a lowercase letter

Test data 2: "5"
Expected result 2:
"INVALID INPUT"

Test data 2: "N"
Expected result 1:
"N" is an uppercase letter

Test data 4: " "
Expected result 4:
"INVALID INPUT"
*/

let char3 = 'A'
let char3Code = char3.charCodeAt()

if(char3Code >= 65 && char3Code <= 90) {
    console.log(`'${char3}' is a upper case`);
}
else if(char3Code >= 97 && char3Code <= 122) {
    console.log(`'${char3}' this is a lower case`)
}
else {
    console.log('INVALID INPUT')
}



let char4 = '+';
let char4Code = char4.charCodeAt()

if(char4Code >= 48 && char4Code <= 57) {
    console.log(`'${char4} is not a special character`);
}
else if((char4Code >= 65 && char4Code <= 90) || (char4Code >= 97 && char4Code <= 122)) {
    console.log(`'${char4} is not a special character`);
}
else {
    console.log(`'${char4}' is a special character`)
}


/*
Task05

Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.
NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1: "a"
Expected result 1:
"a" is a vowel

Test data 2: "5"
Expected result 2:
"INVALID INPUT"

Test data 2: "N"
Expected result 1:
"N"  is not a vowel

Test data 4: " "
Expected result 4:
"INVALID INPUT"
*/

let char5 = 'a';
let char5Code = char5.charCodeAt()

if((char5Code >= 65 && char5Code <= 90) || (char5Code >= 97 && char5Code <= 122)) {
    if('aeiouAEIOU'.includes(char5)) {
        console.log(`"${char5}" is a vowel`)
    } 
  else { 
    console.log(`"${char5}" is not a vowel`)
  }
}
else {
    console.log('INVALID INPUT')
}




