const objects = [ 'Pen', 'Eraser', 'Board', 'Paper']

/*
for(let i = 0; i < objects.length; i++) {
    console.log(objects[i]);
} // Pen Eraser Board Paper
*/

// For of loop of doing it 
for(let obj of objects) {
    console.log(obj); 
}

// Count how many words start with P in the array above in objects
let countStartP = 0;
for(const obj of objects) {
    if(obj.startsWith('P')) countStartP++;
}

console.log(countStartP);