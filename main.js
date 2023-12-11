/**
 * Library project
 */

let BOOKS = JSON.parse(localStorage.getItem("books")) || [];
if (BOOKS.length > 0) displayBooks();

// ========== HTML elements
const addButton = document.querySelector(".btn-add");
const modalWindow = document.querySelector(".modal");
const overlayWindow = document.querySelector(".overlay");

// ========== Form elements
const form = document.querySelector(".add-book-form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const checkboxInput = document.querySelector("#is-read");

// ========== Events
addButton.addEventListener("click", openModal);
overlayWindow.addEventListener("click", closeModal);

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newBook = {
        title: titleInput.value,
        author: authorInput.value,
        pages: pagesInput.value,
        isRead: checkboxInput.checked,
    };

    BOOKS.push(newBook);
    setBooks();
    displayBooks();

    form.reset();
    closeModal();
});

function openModal() {
    modalWindow.classList.add("open");
    overlayWindow.classList.add("open");
}
function closeModal() {
    modalWindow.classList.remove("open");
    overlayWindow.classList.remove("open");
}

function displayBooks() {
    const booksGrid = document.querySelector(".books-grid");
    booksGrid.innerHTML = "";
    BOOKS.forEach((book) => {
        const newBookCard = document.createElement("div");
        newBookCard.className = "book-card";

        newBookCard.innerHTML = `
                    <h2 class="book__title">"${book.title}"</h2>
                    <h3 class="book__author">${book.author}</h3>
                    <h3 class="book__pages">${book.pages}</h3>
                    <div class="btn-group">
                        ${
                            book.isRead
                                ? `<button class="btn btn-green">Read</button>`
                                : `<button class="btn btn-red">Not Read</button>`
                        }
                        <button class="btn btn-remove">Remove</button>
                    </div>
    `;
        booksGrid.append(newBookCard);
    });
}

// Localstorage

function setBooks() {
    localStorage.setItem("books", JSON.stringify(BOOKS));
}
