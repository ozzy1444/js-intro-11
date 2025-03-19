function isDigit(char) {
    return /[0-9]/.test(char);
}

console.log(isDigit('5'));
console.log(isDigit('A'));



function isLowerCase(char) {
    return /[a-z]/.test(char);
}
function isUpperCase(char) {
    return /[A-Z]/.test(char);
}

console.log(isUpperCase('A')) //True



function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}

console.log(isLetter('V')) // true
console.log(isLetter('b')) // true
console.log(isLetter('bv')) // false because it only checks for 1 character



function isSpace(char) {
    return /\s/.test(char)
}
// OR
function isSpace(char) {
    return char === ' ';
}

function isDigitOrLetter(char) {
    return /^[0-9A-Za-z]/.test(char)
}

function isSpecial(char) {
    return /^[^0-9A-Za-z\s]$/.test(char)
}

console.log(isSpecial('$'))

function isVowel(char) {
    return /^[aeiouAEIOU]$/.test(char)
}
console.log(isVowel('Z'))
console.log(isVowel('O'))
console.log(isVowel('a'))



const CharacterHelper = {
    isDigit, 
    isUpperCase, 
    isLowerCase, 
    isLetter, 
    isSpace, 
    isSpecial, 
    isDigitOrLetter, 
    isVowel,
}; 

module.exports.CharacterHelper = CharacterHelper; 

// exporting statements
MediaSourceHandle.export.isDigit
MediaSourceHandle.export.isUpperCase
MediaSourceHandle.export.isLowerCase
MediaSourceHandle.export.isLetter
MediaSourceHandle.export.isSpace
MediaSourceHandle.export.isDigitOrLetter
MediaSourceHandle.export.isSpecial
MediaSourceHandle.export.isVowel

// export formula -> const { CharacterHelper } = require('./../utils/CharacterHelper.js')