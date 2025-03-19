class Program {
    //instance properties
    name = 'SDET';
    batchNum = 11;

    // instance methods
    functA() {
        console.log('A')
    }

    functB() {
        console.log('B')
    }
}

Number.MAX_SAFE_INTEGER // this is a static 
Math.max(1, 4); // this is an example of a static method

Program.funcA()// you cannot access instance methods and properties with class name 