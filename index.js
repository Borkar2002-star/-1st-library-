console.log('this is code of js');

//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display constructor
function Display() {

}

//add methods to display prototypes
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr><td>${book.name}</td><td>${book.author}</td><td>${book.type}</td></tr>`;  
    tableBody.innerHTML += uiString;
}

// implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// implement the validate function
Display.prototype.validate = function (book) {
    if(book.name.length<2||book.author.length<2)
    {
        return false;
    }
    else{
        return true;
    }
}

// implement the show function
Display.prototype.show = function (type,displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message</strong> ${displayMessage}
                         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
setTimeout(function(){
    message.innerHTML=''
},2000);
}

//add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    console.log('You have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');


    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success',' your book has been successfully added');
    }
    else{
        display.show('danger',' sorry you cannot add thi book . ');
    }
    e.preventDefault();
}
