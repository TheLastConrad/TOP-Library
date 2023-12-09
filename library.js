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


// function newBookSubmit() {

//   // alert('yep. this button is working');


//   // let newBook = new Book(title, author, numOfPages, read)
//   addBookToLibrary(title, author, numOfPages, read);
// }
