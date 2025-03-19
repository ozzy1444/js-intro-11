// This is not available in java-C#

let rand1 = Math.round(Math.round() * (100 - -100)) + -100;

console.log(rand1);

if(rand1 > 0) {
    console.log('pos');
}
else if(rand1 < 0) {
    console.log('neg');
}
else {
    console.log('neutral');
}