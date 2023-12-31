function Book(title, author, numOfPages, read=false) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = (read==true) ? 'This has been read' : 'Not read yet';


//   this.info= function() {
//   return this.title + " by " + this.author + ", " + this.numOfPages+ " pages," + this.read;
//  };
}

let library = [];

function addBookToLibrary(a,b,c,d) {
  library.push(new Book(a,b,c,d));


  // do stuff here
}

//grab new book div
let newBook = document.getElementById('new-book');

function drawNewBookMakerModal() {
  let newBookForm = document.createElement('form');
  newBookForm.setAttribute('id', 'new-book-form');
  newBookForm.setAttribute('method', 'post');


  let titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title: ';
  titleLabel.setAttribute('for', 'title');

  let titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'new-book-title');
  titleInput.setAttribute('id', 'title');
    

  let authorLabel = document.createElement('label');
  authorLabel.textContent = 'Author: ';
  authorLabel.setAttribute('for', 'author');

  let authorInput = document.createElement('input');
  authorInput.setAttribute('type', 'text');
  authorInput.setAttribute('name', 'new-book-author');
  authorInput.setAttribute('id', 'author');

    

  let numOfPagesLabel = document.createElement('label');
  numOfPagesLabel.textContent = 'Number of Pages: ';
  numOfPagesLabel.setAttribute('for', 'numOfPages');

  let numOfPagesInput = document.createElement('input');
  numOfPagesInput.setAttribute('type', 'numOfPages');
  numOfPagesInput.setAttribute('name', 'new-book-numOfPages');
  numOfPagesInput.setAttribute('id', 'numOfPages');

    

  let readLabel = document.createElement('label');
  readLabel.textContent = 'Have you read this yet?: ';
  readLabel.setAttribute('for', 'read');

  let readInput = document.createElement('input');
  readInput.setAttribute('type', 'checkbox');
  readInput.setAttribute('name', 'new-book-read');
  readInput.setAttribute('id', 'read');

  let submitButton = document.createElement('button');
  submitButton.textContent = 'Submit New Book';
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('onclick', 'newBookSubmit()');
  submitButton.setAttribute('id', 'new-book-submit');


  newBookForm.appendChild(titleLabel);
  newBookForm.appendChild(titleInput);
  newBookForm.appendChild(authorLabel);
  newBookForm.appendChild(authorInput);
  newBookForm.appendChild(numOfPagesLabel);
  newBookForm.appendChild(numOfPagesInput);
  newBookForm.appendChild(readLabel);
  newBookForm.appendChild(readInput);
  newBookForm.appendChild(submitButton);

  // put the form in the the new-book div
  newBook.appendChild(newBookForm);


  // replace the Submit it here! button with a collapse modal button
  subInRemoveNewBookMakerModalButton()
}


let newBookMakerModalSubmitHereButton = document.createElement('button');
newBookMakerModalSubmitHereButton.setAttribute('onclick', 'drawNewBookMakerModal()');
newBookMakerModalSubmitHereButton.setAttribute('id', 'draw-new-book-maker-modal');
newBookMakerModalSubmitHereButton.textContent = "Submit it here!";


let removeNewBookMakerModalButton = document.createElement('button');
removeNewBookMakerModalButton.setAttribute('onclick', 'removeNewBookMakerModal()');
removeNewBookMakerModalButton.setAttribute('id', 'remove-new-book-maker-modal');
removeNewBookMakerModalButton.textContent = "<Collapse New Book Modal>";

function subInNewBookMakerModalSubmitHereButton(){

  // runs when newBookMakerModalSubmitHereButton is pressed. Subs in new Book Maker
  askNewBook.replaceChild(newBookMakerModalSubmitHereButton, document.getElementById('remove-new-book-maker-modal'));

}

let askNewBook = document.getElementById('ask-new-book');

function subInRemoveNewBookMakerModalButton(){

  // subs out newBookMakerModalSubmitHereButton and subs in removeNewBookMakerModalButton

  let theOldNBMMButton = document.getElementById('draw-new-book-maker-modal');

  askNewBook.replaceChild(removeNewBookMakerModalButton, theOldNBMMButton);
  




}


function removeNewBookMakerModal(){
  newBook.removeChild(document.getElementById('new-book-form'));
  subInNewBookMakerModalSubmitHereButton();
}

function testLibrary(){
  addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
  addBookToLibrary("Jurassic Park", "Michael Crichton", 600);
  addBookToLibrary("If I Did It", "O.J. Simpson", 50, true);
}

testLibrary();

// book template:

// <div class="book">
//       <ul id="book-title">
//         <li id="book-author"></li>
//         <li id="book-pages"></li>
//         <li id="book-read-status"></li>  

let fullLibrary = document.getElementById('full-library');

let bookLibrary = [];

let nowBook;

//create book from Object to 
function showBook(book){
  
  
  let thisBook = document.createElement('div');
  thisBook.setAttribute('id', `book-${library.indexOf(book)}`);
  thisBook.setAttribute('class', 'book')
  // console.log(`  made a div... id: book-${library.indexOf(book)}`);

  let thisBookTitle = document.createElement('ul');
  thisBookTitle.setAttribute('id', `book-${library.indexOf(book)}-title`);
  thisBookTitle.textContent = book.title;
  // console.log(`  made a title... ${book.title}`);

  let thisBookAuthor = document.createElement('li');
  thisBookAuthor.setAttribute('id', `book-${library.indexOf(book)}-author`);
  thisBookAuthor.textContent = `by ` + book.author;
  // console.log(`  made a author...${book.author}`);

  let thisBookNumberOfPages = document.createElement('li');
  thisBookNumberOfPages.setAttribute('id', `book-${library.indexOf(book)}-numOfPages`);
  thisBookNumberOfPages.textContent = book.numOfPages + ' pages';
  // console.log(`  made a pages... ${book.numOfPages}`);

  let thisBookRead = document.createElement('li');
  thisBookRead.setAttribute('id', `book-${library.indexOf(book)}-read`);
  thisBookRead.textContent = `\t`+ book.read; 
  // console.log(`  made a read... ${book.read}`); 
  // <button type="submit" id="new-book-submit" onclick="newBookSubmit()" >Submit New Book</button>
  let thisBookRemove = document.createElement('li');
  let thisBookRemoveButton = document.createElement('input');
  thisBookRemoveButton.type = 'button';
  thisBookRemoveButton.value = 'Remove Book';
  thisBookRemoveButton.onclick = function() {removeBook(book)} ; 
  // thisBookRemoveButton.textContent = 'Remove Book'

  thisBookRemove.appendChild(thisBookRemoveButton);

  // button to toggle Read status of the book
  let thisBookReadToggle = document.createElement('li');
  let thisBookReadToggleButton = document.createElement('input');
  thisBookReadToggleButton.type = 'button';
  thisBookReadToggleButton.value = 'Read/Unread Book';
  thisBookReadToggleButton.onclick = function() {changeBookRead(book)} ; 
  // thisBookReadButton.textContent = 'Remove Book'

  thisBookReadToggle.appendChild(thisBookReadToggleButton);

  //set all the child li's into the ul

  thisBookTitle.appendChild(thisBookAuthor);
  thisBookTitle.appendChild(thisBookNumberOfPages);
  thisBookTitle.appendChild(thisBookRead);
  thisBookTitle.appendChild(thisBookRemove);
  thisBookTitle.appendChild(thisBookReadToggle);
  
  // console.log(`  appeneded childeren to title...`);
  
  thisBook.appendChild(thisBookTitle);
  // console.log(`  appended title to book div...`);

  nowBook = thisBook;

  fullLibrary.appendChild(thisBook);

}

// clear current shown library books

function putBackLibraryBooks(){
  fullLibrary.innerHTML = ''; //document.getElementsByClassName('book')
}

// create books from Library using showBook;

function showLibrary(){
  putBackLibraryBooks();
  library.forEach(showBook);
}



showLibrary();

// showBook(library[0]);


let title =document.querySelector('id', 'title')
let author = document.querySelector('id', 'author')
let numOfPages = document.querySelector('id', 'numOfPages')
let read = document.querySelector('id', 'read')

let newBookSubmitButton = document.querySelector('id', 'new-book-submit')

// remove book from library
function removeBook(book){
  if (confirm(`Remove "${book.title}" ...\n\n ... Are you sure?`)){
    // they pressed OK ...

    library.splice(library.indexOf(book), 1);

    showLibrary();

  } else {
    // they pressed Cancel
    alert('no book deleted.')

  }
}


// create a function to change the read status of the indicated book

function changeBookRead(book) {
  


  if (book.read == 'Not read yet') {
    if (confirm(`Oh okay ... you read "${book.title}"? \n\n[confirm with 'Okay']\n\n`)){
      book.read = 'This has been read';
      showLibrary();
    } else {
      alert('no change.');
    }

  } else if (book.read == 'This has been read'){
    if (confirm(`Wait ... I thought you read "${book.title}" ...\n\n ... Are you saying you haven't read it?? \n\n[ Press 'Okay' if you really didn't read this book. Press 'Cancel' if you had. ]`)){
      book.read = 'Not read yet';
      showLibrary();
    } else {
      alert('no change.');
    }
  }

}


function newBookSubmit() {

  alert('yep. this button is working');


  // // let newBook = new Book(title, author, numOfPages, read)
  // addBookToLibrary(title, author, numOfPages, read);
}
