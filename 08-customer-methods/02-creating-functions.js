// 1. Function declaration - traditional way
function sum1(num1, num2) {
    return num1 + num2;
}

console.log(sum1(1, 5)); // 6

// 2. Function Expressoins / besdies naming the function, you are just assigning it to a variable. 
const sum2 = function (num1, num2) { 
    return num1 + num2; 
}

// 3. arrow functions / another way of creating a function, I used this in function - ES6 feature
const sum3 = (num1, num2) => {
    return num1 + num2; 
}

console.log(sum3(5, 3)); // 8

