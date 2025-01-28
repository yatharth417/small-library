function Book(title, author, pages, hasRead){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.hasRead=hasRead;
}
const Library = [];
function addBookToLibrary(title, author, pages, hasRead){
    const newBook= new Book(title, author, pages, hasRead);

    Library.push(newBook);
    displayBooks();
}

function displayBooks(){
    const tableBody = document.querySelector("#libraryTable tbody");
    tableBody.innerHTML= "";
    Library.forEach((book, index) => {
        const row = document.createElement("tr");

        row.innerHTML = ` 
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.hasRead ? "already read" : "not read yet"}</td>
        `;
        tableBody.appendChild(row);
    });
}
function removeBook(index) {
    Library.splice(index, 1);
    displayBooks();
}
function addSampleBooks(){
    addBookToLibrary("1984", "George Orwell", 328, true);
    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
    addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
}
function showNewBookForm(){
    document.getElementById("newBookFormContainer").style.display = "block";
}
function hideNewBookForm(){
    document.getElementById("newBookFormContainer").style.display = "none";
}
document.getElementById("newBookForm").addEventListener("submit", (event)=>{
    event.preventDefault();
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const pages = parseInt(document.getElementById("bookPages").value);
    const read = document.getElementById("bookRead").checked;

    addBookToLibrary(title, author, pages, read);
    hideNewBookForm();
    document.getElementById("newBookForm").reset();
})