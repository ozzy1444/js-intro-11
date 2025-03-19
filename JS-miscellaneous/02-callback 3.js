// funcA takes another function as a parameter -> Higher Order Function 
// funcB is passed as and aargument to another function -> callback Function 

function funcA(callbackFunc){
    console.log('This is A!');
    callbackFunc();
}

funcA(() => console.log('This is B!')); 