const books = {} ;

function getBooks() {
  return books;
}

function getBookById(id) {
  const book = books[id];
  
  if (!books) {
    return null;
  }

  return book;
}

function saveBook(book) {
  if (book.id) {
    books[book.id] = book;
  }
}

saveBook({id: 'book-1', name: 'Book 1'});
const myBooks = getBooks();
const myBook = getBookById('book-1');

console.log(myBooks);
console.log(myBook);
