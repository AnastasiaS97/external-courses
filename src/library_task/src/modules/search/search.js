import { books } from '../../data/books.js';
import { filterLogEntry, searchLogEntry } from '../nav/nav.js';

const searchBtn = document.querySelector('.search-btn');

const searchByKeyword = () => {
  let input = document.getElementById('search-bar').value;
  const booksToSearch = document.getElementsByClassName('content-book');
  if (input.length > 0) {
    input = input.toLowerCase();
    for (let index = 0; index < booksToSearch.length; index += 1) {
      if (!booksToSearch[index].innerHTML.toLowerCase().includes(input)) {
        booksToSearch[index].style.display = 'none';
      } else {
        booksToSearch[index].style.display = '';
      }
    }
  } else {
    for (let index = 0; index < booksToSearch.length; index += 1) {
      booksToSearch[index].style.display = '';
    }
  }

  return 0;
};

searchBtn.onclick = () => {
  searchByKeyword();
  searchLogEntry();
};

const mostPopular = () => {
  const booksToFilter = document.getElementsByClassName('content-book');
  console.log(booksToFilter);
  for (let index = 0; index < booksToFilter.length; index += 1) {
    if (books[index].rating !== 5) {
      booksToFilter[index].style.display = 'none';
    }
  }
};

const mostPopularBtn = document.getElementById('filter-most-popular');

mostPopularBtn.onclick = () => {
  mostPopular();
  filterLogEntry('filter-most-popular');
};

const allBooks = () => {
  const booksToFilter = document.getElementsByClassName('content-book');
  for (let index = 0; index < booksToFilter.length; index += 1) {
    booksToFilter[index].style.display = '';
  }
};

const allBooksBtn = document.getElementById('filter-all-books');

allBooksBtn.onclick = () => {
  allBooks();
  filterLogEntry('filter-all-books');
};
