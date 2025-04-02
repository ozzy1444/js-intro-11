/**
 * ACCESSING DOM ELEMENTS  
 */


//Below methods are functiong of document object
console.log(document)

/**
 * getElementById()
 */

const headingEl = document.getElementById('heading');
console.log(headingEl);

const carImages = document.getElementById('car')


/**
 * innerHTML
 */

let author = 'John Doe';

//Grab element 
const authorEl = document.getElementById('author');
//set content of element using intterhtml
authorEl.innerHTML = 'John Doe'; 