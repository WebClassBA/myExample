let container = document.querySelector("#menu-nav");
let details = document.querySelector("#book-details");

fetch("js/books.json")
  .then(response => response.json())
  .then(books => {
    books.forEach(book => {
      container.innerHTML += `
        <button class="btn text-light border border-secondary text-start"
                onclick="showBook('${book.title}')">
          ${book.title}
        </button>
      `;
    });

    showBook(books[0].title);
  });

function showBook(title) {
  fetch("js/books.json")
    .then(response => response.json())
    .then(books => {
      const book = books.find(book => book.title === title);

      details.innerHTML = `
      
        <h2 class="mb-4">${book.title}</h2>
        <img src="${book.image}" class="img-fluid rounded-3 mb-4" alt="${book.title}">
        <p>${book.description}</p>
       
        <a href="${book.destination}" target="_blank" class="btn btn-outline-danger">
          Learn more
        </a>
 
    
       
      `;
    });
}