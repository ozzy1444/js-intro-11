const { getRandomNumber } = require('./../utils/MathHelper.js');

let username = 'TechGlobal' //TechGlobal
let password = 'Test1234' //Test1234

if(username === 'TechGlobal') {
    // ask password and check if its correct
    if(password === 'Test1234') {
        console.log('You are logged in!')
    } else {
    console.log('Invalid password entered!')
}
}
else {
    console.log('Invalid Username entered')
}

const { getRandomNumber } = require('./../utils/MathHelper.js');
console.log(getRandomNumber(5, 10)); 



