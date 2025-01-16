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
function addSampleBooks(){
    addBookToLibrary("1984", "George Orwell", 328, true);
    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
    addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
}