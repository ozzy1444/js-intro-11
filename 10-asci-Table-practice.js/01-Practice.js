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

let char2 = 'b';
let char2Code = char2.charCodeAt()

if(char2Code >= 48 && char2Code <= 57) {
    console.log(`'${char2} is a digit`);
}
else if((char2Code >= 65 && char2Code <= 90) || (char2Code >= 97 && char2Code <= 122)) {
    console.log(`'${char2} is a letter`);
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


/*
Task04

Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.
Special character: except space, letters, digits

Test data 1: "a"
Expected result 1:
"a" is not a special 
character

Test data 2: "5"
Expected result 2:
"5" is not a special 
character

Test data 3: "$"
Expected result 3:
"$"  is a special character

Test data 4: " "
Expected result 4:
" " is not a special character
*/

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