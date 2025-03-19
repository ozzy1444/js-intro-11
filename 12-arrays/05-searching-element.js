const students = ['John', 'Alex', 'Jessie', 'Jane', 'Omar', 'Omar'];

students.includes('John'); // true
students.includes('Omar'); // true
students.includes('Max'); // false

students.indexOf('Jane'); // 3
students.lastIndexOf('Jane'); // 3

students.indexOf('Omar'); // 3
students.lastIndexOf('Omar'); // 5

students.lastIndexOf('Heidi'); // -1 // still returns a number if undefined
