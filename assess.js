const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

//1. Create a function called getAvailableBooks that returns an array of all available
//books.

function getAvailableBooks(){
    return books.map(x =>x.title)
}
console.log(getAvailableBooks())

//2. Create a function getBooksByAuthor that takes an author's name as an argument and
//returns an array of all books by that author.
function getBooksByAuthor(){
    return books.filter(x =>x.author).map(x =>x.author)
   
}
console.log(getBooksByAuthor())


//3. Create a function addNewBook that takes a book object as an argument and adds it
//to the library, ensuring that the new book has all required properties (title, author,
//publicationYear, and isAvailable).

function addNewBook(book){
    let
    for(book in books){
        books[title]=book.push()
        books[author].push()
        books[publicationYear].push()
        books[isAvailable].push()
    
    }
    return books
}
const newBook =[{title:`River and source`, author:`Kigwendu`, publicationYear:`2002`,isAvailable:`False` }]
console.log(addNewBook(newBook))


//4. Create a function checkoutBook that takes a book title as an argument and changes
//the book's isAvailable property to false. If the book is not found in the library, the
//function should return a message indicating that the book is not available.
function checkoutBook(title){
    for (p in books){
        const d = books.map(x=>x.title)
        if(isAvailable = false){
            console.log(`The book `+ title +` is not available`)
    
        }
         else(
        console.log(`The book` +title+`is available`)
    )}
}
checkoutBook({title :`Crime and Punishment`})

//5. Create a function returnBook that takes a book title as an argument and changes the
//book's isAvailable property to true. If the book is not found in the library, the function
//should return a message indicating that the book does not belong to the library.
function returnBook(title){
    
     const w =books.map(function (title){
     for (x in books){
      if(isAvailable = true){
        console.log(`The book is available`)
     }
      else(
        console.log(`The book is not available`)
     )}})
      }


returnBook({title:`Homes`})
