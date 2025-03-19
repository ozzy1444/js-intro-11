// Task: create a teacher prototype with fname, lname, age, field properties

function Teacher(fname, lname, age, field) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.field = field;
}

// create 2 teacher prototype methods as teach and giveHomework
// fname teaches field
// fname gives homework

Teacher.prototype.teach = function() {
    console.log(`${this.fname} teaches ${this.field} `)
}

Teacher.prototype.giveHomework = function() {
    console.log(`${this.fname} gives homework`)
}



// Create 4 Teacher Objects/Instances
const teacher1 = new Teacher('John', 'Doe', 35, 'Math');
const teacher2 = new Teacher('Jane', 'Donnely', 55, 'English');
const teacher3 = new Teacher('Sarah', 'Elly', 43, 'Art');
const teacher4 = new Teacher('Adam', 'Bayer', 33, 'Science');



// Find the oldest Teacher -> Jane

const teachers = [teacher1, teacher2, teacher3, teacher4];


const oldest = teachers.reduce((acc, curr) => {
    if(curr.age > acc.age) acc = curr;
    return acc;
}, teachers[0])

console.log(oldest.fname)


// Find the average age of the teachers -> 39

const sumOfAges = teachers.reduce((acc, curr) => {
    return acc += curr.age
}, 0)

console.log(sumOfAges / teachers.length) 


// Find the youngest teacher -> Adam Bayer

const youngest = teachers.reduce((acc, curr) => {
    if(acc > curr) curr = acc
    return curr
}, teachers[0])

console.log(youngest.fname,youngest.lname)


// Get all the fullnames of the teachers -> ['John Doe', 'Jane Donnely', 'Sarah Elly', 'Adam Bayer']

const teachersFullName = teachers.map(x => `${x.fname} ${x.lname}`)

console.log(teachersFullName)