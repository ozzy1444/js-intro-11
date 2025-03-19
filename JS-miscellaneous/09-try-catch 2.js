try{
    // your code goes here 
    // Runtime will always attempt to run this block
}
catch(error) {
    // your code to handle the error
    // will be executed ONLY if there is an error in the try block
}
finally{
    //runs no matter what, error or not
    // we barely use finally tho !!!!!!!!!!!!
}


try {
    console.log('Hello', fname)
}
catch(error) {
    console.log('Casught an error!!!') // Casught an error!!!
}
finally {
    console.log('Good Bye') // Good Bye
}

// Why we need try catch

console.log(fname);