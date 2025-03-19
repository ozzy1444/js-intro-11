//function declaration
function printHi() {
    console.log('Hi');
}

printHi(); // Hi

// Function delaration 
function runMyDaily() {
    console.log('make coffee')
    console.log('drink coffee')
    console.log('Shower')
    console.log('dress up')
}

runMyDaily() // all the 4 lines ^up there will be printed


// Function declaration with an argument
function hiName(name) { 
    console.log(`Hi ${name}!`)
}

hiName('John'); // Hi John!
hiName('Aziz'); // Hi Aziz!


// Practice 
function greetName(greet, name) {   
    console.log(`${greet}, ${name}!`)

}
greetName('Good morning', 'Aziz') // Good morning, Aziz!


function multiply(num1, num2) {
    let result = num1 * num2;
    return result
}

console.log(multiply(5, 2)); // 10


function average(num1, num2) { 
    let result2 = (num1 + num2) / 2;
    return result2
}

console.log(average(10, 2));




