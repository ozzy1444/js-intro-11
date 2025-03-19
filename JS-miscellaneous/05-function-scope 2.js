
/*
Function scope is variable that can be used INSIDE the function, so its kinda like globally 
only inside the function. When you try to use it outside the function, it wont work
*/
function any() { 
    var var1 = 'Hello';
    let var2 = 'Hi';
    const var3 = 'Sunday';

    console.log(var1, var2, var3);
}; // Hello Hi Sunday

any();

console.log(var1); // This does not work // Not defined