const {getRandomNumber} = require('./../utils/MathHelper')

let r1 = getRandomNumber(-5, 5); 

let randomNum = Math.round(Math.random() * (5 - -5)) + -5;

if(randomNum > 0) {
    console.log('POS')
}
else if (randomNum < 0) {
    console.log('NEG')
} 
else {
    console.log('NEUTRAL')
}

//Ternary 
let result1 = randomNum > 0 ? 'POS' : randomNum < 0 ?  'NEG' : 'NEUTRAL';
console.log(result1); 



