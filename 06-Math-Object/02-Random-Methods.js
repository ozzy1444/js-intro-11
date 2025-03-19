Math.random(); // returns a number between 0 (inclusive) and 1 (exclusive)

// Generate a random number between 3 and 5 (both inclusive)
// 3,4,5

console.log(Math.random()); // 0.6826977469443762


/*
Find a random number between a and b 
1. calulate how many numbers you have in the range (between both numbers)
bigger number - smaller number + 1

2. multiply the count you found with Math.Random()
result = Math.Random() * count 

3. Floor the result using math.floor() method 
NewResult = Math.floor(result)

4. Add your smaller number to new result 
finalResult = newResult + smallerNumber; 

let result = Math.floor(Math.random() * (max - min +1)) + min;
let result = Math.round(Math.random() * (max - min)) + min; I should stick to this formula better

*/

//Generate random number between 6 and 10 both inclusive 

let r1 = Math.floor(Math.random() * (10 - 6 + 1) + 6);
let r2 = Math.round(Math.random() * (10 - 6) + 6);
