import { books } from './assets/data/books.js';

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

const addBook = document.getElementById('add-book-modal');
const addBtn = document.getElementById('add-book-btn');
const modalForm = document.getElementById('add-modal');
const closeModal = document.getElementById('add-book-close');

addBtn.onclick = () => {
  addBook.style.display = 'block';
};

const dropArea = document.querySelector('.modal-drop');
const modalWindow = document.querySelector('.modal-content-wrp');
let dropImage;

dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.classList.add('dragged');
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('dragged');
});

const showDropImage = () => {
  const type = dropImage.type;
  const extension = ['image/jpeg', 'image/jpg', 'image/png'];
  if (extension.includes(type)) {
    const newImage = new FileReader();
    newImage.onload = () => {
      const url = newImage.result;
      const tag = `<img src="${url}" id="add-cover" alt="">`;
      dropArea.innerHTML = tag;
      dropArea.style.border = '2px solid #16a4fa';
      modalWindow.style.height = '500px';
    };
    newImage.readAsDataURL(dropImage);
  }

  return 0;
};

dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  dropImage = event.dataTransfer.files[0];
  showDropImage();
});

const submitForm = () => {
  const newTitle = document.getElementById('add-title').value;
  const newAuthor = document.getElementById('add-author').value;
  const newCover = document.getElementById('add-cover').src;
  function pushBook() {
    const newBook = {
      cover: newCover,
      title: newTitle,
      author: newAuthor,
      rating: 1,
    };
    books.push(newBook);

    return 0;
  }
  pushBook();
  addBook.style.display = 'none';
  modalWindow.style.height = '400px';
  dropArea.innerHTML = '<span>Drag and drop the cover image here</span>';
  dropArea.style.border = '2px dashed #16a4fa';
  modalForm.reset();

  return 0;
};

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  submitForm();
  showBooks();
});

closeModal.onclick = () => {
  addBook.style.display = 'none';
  modalWindow.style.height = '400px';
  dropArea.innerHTML = '<span>Drag and drop the cover image here</span>';
  dropArea.style.border = '2px dashed #16a4fa';
  modalForm.reset();
};

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
};

const starBooks = document.getElementsByClassName('book-cover');
const booksChange = document.getElementsByClassName('content-book');
const starChangeTo = document.getElementById('star-change');
const starButton = document.getElementById('star-button');

const starRating = () => {
  for (let index = 0; index < starBooks.length; index += 1) {
    starBooks[index].onclick = () => {
      console.log(booksChange[index].querySelector('h2').innerHTML);
      document.getElementById('star-change-book').innerHTML = booksChange[index].querySelector('h2').innerHTML;
      document.getElementById('star-modal').style.display = 'block';
      starChangeTo.onclick = () => {
        document.getElementById('star-change-step').innerHTML = starChangeTo.value;
      };
      starChangeTo.value = books[index].rating;
      document.getElementById('star-change-step').innerHTML = starChangeTo.value;
      starButton.onclick = () => {
        books[index].rating = starChangeTo.value;
        const stars = booksChange[index].getElementsByClassName('fa-star');
        for (let indexAll = 1; indexAll <= 5; indexAll += 1) {
          stars[indexAll - 1].classList.replace('fa-solid', 'fa-regular');
        }
        for (let indexNew = 1; indexNew <= starChangeTo.value; indexNew += 1) {
          stars[indexNew - 1].classList.add('fa-solid');
        }
        document.getElementById('star-change-step').innerHTML = '';
        document.getElementById('star-modal').style.display = 'none';
      };
    };
  }
};

const closeStarModal = document.getElementById('star-close');
const starModal = document.getElementById('star-modal');

closeStarModal.onclick = () => {
  document.getElementById('star-change-step').innerHTML = '';
  starModal.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
  showBooks();
  starRating();
});
