/**
 * retuns a random number between two numbers
 * @param {*} start starting number is inclusive 
 * @param {*} end 
 * @returns 
 */

function getRandomNumber(start, end) {
    let max = Math.max(start, end);
    let min = Math.min(start, end);

   return Math.round(Math.random() * (max - min)) + min; 

}

module.exports.getRandomNumber = getRandomNumber; 

// import formula -> const { getRandomNumber } = require('./../utils/MathHelper.js');
