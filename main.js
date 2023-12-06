/**
 * Library project
 */

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

    console.log(newBook);

    displayBooks(newBook);

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

function displayBooks(book) {}
