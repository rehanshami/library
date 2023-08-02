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
  while(booksInLibrary.firstChild) {
    booksInLibrary.removeChild(booksInLibrary.firstChild);
  }
  myLibrary.forEach((book) => {

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const removeCard = document.createElement('span')
    removeCard.classList.add('remove-book');
    removeCard.classList.add('material-icons')
    removeCard.textContent = `close`;

    const bookTitle = document.createElement('p');
    bookTitle.textContent = `Title: ${book.title}`

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${book.author}`;

    const bookPages = document.createElement('p');
    bookPages.textContent = `Pages: ${book.pages}`

    const bookRead = document.createElement('button');
    bookRead.textContent = `${book.read ? "Read" : "Not read"}`;
    bookRead.classList.add(book.read ? "book-read" : "not-read")

    bookCard.appendChild(removeCard)
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);

    booksInLibrary.appendChild(bookCard);
    library.appendChild(booksInLibrary);

    removeCard.addEventListener('click', () => {
      removeBookFromLibrary(book);
    })

    bookRead.addEventListener('click', () => {
      updateReadStatus(bookRead)});

  })
}

function removeBookFromLibrary(book) {
  myLibrary.splice(book, 1);
  displayBooksInLibrary();
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

const closeForm = document.querySelector('.close-form');
closeForm.addEventListener('click', () => {
  bookForm.classList.toggle('display-toggle')
})  

function updateReadStatus(bookRead) {
  if (bookRead.textContent === "Read") {
    bookRead.textContent = "Not read";
    bookRead.classList.add('not-read');
    bookRead.classList.remove('book-read')
  } else {
    bookRead.textContent = "Read";
    bookRead.classList.add('book-read');
    bookRead.classList.remove('not-read');
    }
}