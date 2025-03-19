function validateAge(age) {
    if(age >=16) return 'Valid';
    throw new Error(`${age} is not allowed for Drivers License`);
}

const r1 = validateAge(16);

console.log(r1); // Valid

try {
    const r1 = validateAge(15);

    console.log(r1);
}
catch(error) {
    console.log('You get an error:', error.message);
}

console.log('Rest of program')