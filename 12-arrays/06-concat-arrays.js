const arr1 = [1, 2, 3]
const arr2 = [6, 7, 8]
const arr3 = [4, 5, 6]

arr1.concat(arr3, arr2); //1, 2, 3, 4, 5, 6, 6, 7, 8]

const newArr2 = arr1.concat(arr3, arr2);

console.log(newArr2);