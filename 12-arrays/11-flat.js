const students = [
    ['A', 'B', 'C'],
    ['X', 'Y', 'Z'],
    ['K', 'L'],
    ['D'],
]; 

console.log(students);
console.log(students.flat());
console.log(students.flat().length);

const numbers = [
    [1, 2, 3],
    [4, 5, [6, 7, [8, 9]]]
];

console.log(numbers); 
console.log(numbers.flat()); 
console.log(numbers.flat(2)); 
console.log(numbers.flat(3)); 

/*
TASK: Flattens nester-arrays
Argument: it can take an optional depth argument
    Note: by Default it is 1
Return: a new array which is falttened 
Static or Instance: Instance
Does it modify the orginial array: No
*/

