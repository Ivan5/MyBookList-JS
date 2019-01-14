//Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//Ui class: Handle ui tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book one",
        author: "John Doe",
        isbn: "23123132"
      },
      {
        title: "Book two",
        author: "John Doe",
        isbn: "45456"
      }
    ];

    const books = StoredBooks;

    books.forEach(book => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm deelte">X</a></td>
    `;

    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}
//Store Class: Handles Storage

//Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);
//Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", e => {
  e.preventDefault();
  //get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  //instatiare book
  const book = new Book(title, author, isbn);

  //Add Book to UI
  UI.addBookToList(book);
  //clear fieds
  UI.clearFields();
});
//Event: Remove a Book
