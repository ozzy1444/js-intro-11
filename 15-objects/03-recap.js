const computor = {
    os: 'Mac', 
    color: 'Black', 
    memory: '1 TB', 
    price: 999.99
};

// for in loop
for(const key in computor) {
    console.log(key); // retrieve keys one by one 
    console.log(computor[key]); // retrieve values one by one 
}

//for of loop
// A regular for of Loops wont work 

Object.keys(computor); // keys as an array
Object.values(computor); // values as an array 
Object.entries(computor); // key-values pairs as a nested array 

for(const key of Object.keys(computor)) {
    console.log(key); // os, color, memory, price
    console.log(computor[key]); // mac, black, 1 tb, 999.99
}



// entries

console.log(Object.entries(computor));

for(const entry of Object.entries(computor)) {
    console.log(entry[0]); // gives keys 
    console.log(entry[1]); // values keys
    console.log(entry); // entries keys one by one

}


