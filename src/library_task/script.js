import { books } from './data/books.js';

const showBooks = () => {
  const bookList = document.querySelector('.main-content');
  books.forEach(({
    cover, title, author, rating,
  }) => {
    const book = document.createElement('div');
    book.classList.add('content-book');
    if (title.length > 26) {
      book.innerHTML = `
      <img class="book-cover" src=${cover} alt="book cover">
      <h2 class="book-title_long">${title}</h2>
      <h3 class="book-author">by ${author}</h3>
      <span class="fa-regular fa-star"></span>
      <span class="fa-regular fa-star"></span>
      <span class="fa-regular fa-star"></span>
      <span class="fa-regular fa-star"></span>
      <span class="fa-regular fa-star"></span> `;
    } else {
      book.innerHTML = `
      <img class="book-cover" src=${cover} alt="book cover">
      <h2 class="book-title">${title}</h2>
      <h3 class="book-author">by ${author}</h3>
      <span class="fa-regular fa-star"></span>
      <span class="fa-regular fa-star"></span>
      <span class="fa-regular fa-star"></span>
      <span class="fa-regular fa-star"></span>
      <span class="fa-regular fa-star"></span> `;
    }
    const starRating = book.getElementsByClassName('fa-star');
    for (let index = 1; index <= rating; index += 1) {
      starRating[index - 1].classList.add('fa-solid');
      starRating[index - 1].classList.remove('fa-regular');
    }
    bookList.append(book);
  });

  return 0;
};

document.addEventListener('DOMContentLoaded', () => {
  showBooks();
});
