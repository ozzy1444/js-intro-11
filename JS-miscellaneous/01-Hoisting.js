// variable hoisting 

console.log(y); 

var y = 5;

/*hoisting: moving variable declaration to the top of the code ^it will move the var to the top since JavaScript 
is a interpreted language and will try to fix it for you 
let and const is not hoisted. 
*/




// function hoisting 

function sayHi() {
    console.log('Hi');
}



const sayHi = function() {
    console.log('Hi'); 
}

sayHi()

// ===========DEFINITION FOR INTERVIEW=======
// Hoisting: is the ability to call a variable or function before thier declaration 