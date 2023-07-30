const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#isRead');
const submit = document.querySelector('#button');


submit.addEventListener('click', addBookToLibrary);

let myLibrary = [{
  title: 'The Hobbit',
  author: 'J.R.R Tolkien',
  pages: 303,
  read: false

}];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(event) {
  // do stuff here
  event.preventDefault();
  console.log('hello')
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.checked;

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooksInLibrary(myLibrary);
  clearBookForm();

}

function clearBookForm() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;
  
}

function displayBooksInLibrary() {
  const library = document.querySelector('.library-books');

  const booksInLibrary = document.querySelector('.library-books .book');
  myLibrary.forEach((book) => {

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const bookTitle = document.createElement('p');
    bookTitle.textContent = `Title: ${book.title}`

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${book.author}`;

    const bookPages = document.createElement('p');
    bookPages.textContent = `Pages: ${book.pages}`

    const bookRead = document.createElement('p');
    bookRead.textContent = `Read: ${book.read ? "Yes" : "No"}`;

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);

    booksInLibrary.appendChild(bookCard);
    library.appendChild(booksInLibrary);



  })
}
console.log(myLibrary)

function myFunction(item) {
  console.log(item)
  const bookTitle = document.createElement('p');
  bookTitle.textContent = this.title.value;
  book.appendChild(bookTitle);
  }

  displayBooksInLibrary();


const bookForm = document.querySelector('.book-form');
const addBookInput = document.querySelector('#add-book');
addBookInput.addEventListener('click', () => {
  bookForm.classList.toggle('display-toggle');
  })