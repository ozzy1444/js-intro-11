let rand1 = Math.round(Math.random() * (3 -1)) + 1;

/*
if(rand1 === 1) {
    console.log('ONE');
}
else if(rand1 === 2) {
    console.log('TWO');
}
else {
    console.log("THREE");
}
*/

switch(rand1) {
    case 1:
        console.log('ONE');
        break;
    case 2: 
        console.log('TWO');
        break;
    default:
        console.log('THREE');
}

