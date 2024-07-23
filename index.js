function fetchBooks() {
  return window.fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(books => renderBooks(books));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function addingEventListener() {
  const input = document.getElementById('button');
  function clickAlert() {
    fetchBooks();
  }
  input.addEventListener('click', clickAlert);
}

document.addEventListener('DOMContentLoaded', function() {
  addingEventListener();
});