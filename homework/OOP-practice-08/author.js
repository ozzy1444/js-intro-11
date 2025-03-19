/*
1. Create a class called Author
2. Create a constructor which takes firstName, lastName, country, array of books
3. Create a method called as getFullName() for Author object that will return {firstName lastName}
4. Create a method called as getBooks() for Author object that will return all the books
*/

const Book = require('./book');


class Author {
    constructor(fname, lname, country, books) {
       this.fname = fname; 
       this.lname = lname; 
       this.country = country; 
       this.books = books; 
    }

   getFullName() {
    return `${this.fname} ${this.lname}`;
   }

   getBooks() {
    return this.books;
   }
}

// export code
module.exports = Author;