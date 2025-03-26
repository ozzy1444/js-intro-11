// synchronous code 
// these codes dont consume any time or anything they run very fast line by line
console.log('1')
console.log('2')
console.log('3')

//asynchronous code
/*
    Expected result -> 
    A 
    B 
    C 

    Result -> 
    B 
    C
    A
    Because this is not synchronous, we want it to wait for A then execute wait for B etc etc 
*/
setTimeout(() => {
    console.log('A');
}, 1000);

setTimeout(() => {
    console.log('B');
}, 500);

setTimeout(() => {
    console.log('C');
}, 750);

