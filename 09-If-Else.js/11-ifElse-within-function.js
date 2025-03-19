function evenOdd(number) {
    return number % 2 === 0 ? 'EVEN' : 'ODD'; 
  }
  
  console.log(evenOdd(2));
  console.log(evenOdd(3));
  
  



function posNegZero(number) {
    if(number > 0) return 'Pos'
    else if(number < 0) return 'Neg';
    return 'Zero'
}

//ternary expression 
function posNegZero(number) {
   return number > 0 ? 'Pos' : number < 0 ? 'Neg' : 'Zero'
}



/*
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
startE('John') -> false
*/
function nameE(name) {
    if(name[0] === 'E' || name[0] === 'e')
    return true
    return false
}

function nameE(name) {
    if(name[0] === 'E' || name[0] === 'e') 
        return true
else {
    return false
}
}
console.log(nameE('Emily')); 

function divisable5(number) {
    if(number % 5 === 0)
        return true
else {
    return false
}
}

/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/
//another way 
function divisable5(number) {
    if(number % 5 === 0) return true
    return false
}
console.log(divisable5(7)); 



