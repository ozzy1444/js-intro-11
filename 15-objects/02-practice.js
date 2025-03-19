//creating objects

const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: ['soccer', 'watching movies'], 
    examScore: {
        midterm: 60,
        final: 90
    }
};

console.log(student);



console.log(student.hobbies);
console.log(student.examScore);
console.log(student.hobbies[0]);

// fund the avaerage of the exam scores
console.log((student.examScore.midterm + student.examScore.final) / 2);

// another way of solving dynamically
const allExamValues = Object.values(student.examScore);
let average = allExamValues.reduce((acc, curr) => acc + curr, 0) / allExamValues.length;
console.log(average);

