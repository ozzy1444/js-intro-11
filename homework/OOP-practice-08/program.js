/*
We will write our actual program that we define an author and the books
In this program we will write the biography of George R. R. Martin, an American novelist.

Create 3 books object with the below information:
        BookName                            Genre           TotalPage
        A Game of Thrones                   Epic Fantasy    694
        A Clash of Kings                    Epic Fantasy    768
        A Storm of Swords                   Epic Fantasy    973

Create an Author object with the below information:
    First name: George R. R.
    Last name: Martin
    Country: United States
    Books: are given above

1. Get and print Author's full name
2. Get and print Author's books iterated with a loop

EXPECTED OUTPUT:
George R. R. Martin
Book { title: 'A Game of Thrones', genre: 'Epic Fantasy', page: 694 }
Book { title: 'A Clash of Kings', genre: 'Epic Fantasy', page: 768 }
Book { title: 'A Storm of Swords', genre: 'Epic Fantasy', page: 973 }
*/


const Book = require('./book');
const Author = require('./author');

const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694);
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768);
const book3 = new Book('A Storm of Swords', 'Epic Fantasy', 973);

const author = new Author('George R. R.', 'Martin' , 'United States', [book1, book2, book3]); 

console.log(author.getFullName());

for(const book of author.getBooks()) {
    console.log(book);
}

// another way of solving -> forEach Method
//***author.getBooks().forEach(book => console.log(book))


// Find which book has the most pages 
const bookWithMostPages = author.getBooks().reduce((acc, curr) => {
    if(curr.page > acc.page) return curr;
    else return acc;
})

console.log('The result is', bookWithMostPages.title) // The result is A Storm of Swords