const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#isRead');
const submit = document.querySelector('#button');

submit.addEventListener('click', addBookToLibrary);

let myLibrary = [  {
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
  clearBookForm();

}

function clearBookForm() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;
  
}
console.log(myLibrary)