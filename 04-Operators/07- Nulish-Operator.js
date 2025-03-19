/*
Falsy Values: 0, '', undefined, null, nan

let result = value1 || value2; 
if Value is falsy, then the result is always value2
if Value is truthy, then the result is always value1

let result = value1 ?? value 2
If value1 is undefined or null, then the result is always value2
*/

let name; 

let fetchedName = nameInServer || ''; 

console.log(fetchedName);
