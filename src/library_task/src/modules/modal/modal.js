import { books } from '../../data/books.js';
import { showBooks } from '../main/main.js';
import { addLogEntry, rateLogEntry } from '../nav/nav.js';

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
  addLogEntry();
  submitForm();
  const content = document.getElementById('main-content');
  content.innerHTML = '';
  showBooks();
});

closeModal.onclick = () => {
  addBook.style.display = 'none';
  modalWindow.style.height = '400px';
  dropArea.innerHTML = '<span>Drag and drop the cover image here</span>';
  dropArea.style.border = '2px dashed #16a4fa';
  modalForm.reset();
};

const starBooks = document.getElementsByClassName('book-cover');
const booksChange = document.getElementsByClassName('content-book');
const starChangeTo = document.getElementById('star-change');
const starButton = document.getElementById('star-button');

const starRating = () => {
  for (let index = 0; index < starBooks.length; index += 1) {
    starBooks[index].onclick = () => {
      document.getElementById('star-change-book').innerHTML = booksChange[index].querySelector('h2').innerHTML;
      document.getElementById('star-modal').style.display = 'block';
      starChangeTo.onclick = () => {
        document.getElementById('star-change-step').innerHTML = starChangeTo.value;
      };
      starChangeTo.value = books[index].rating;
      document.getElementById('star-change-step').innerHTML = starChangeTo.value;
      starButton.onclick = () => {
        books[index].rating = starChangeTo.value;
        rateLogEntry(books[index].title, books[index].rating);
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

const tagMustRead = document.getElementById('tag_must-read');
const tagBestOf = document.getElementById('tag_best-of');
const tagClassic = document.getElementById('tag_classic');
const tagNonFiction = document.getElementById('tag_non-fiction');

tagMustRead.onclick = () => {
  tagMustRead.style.backgroundColor = '#16a4fa';
};
tagBestOf.onclick = () => {
  tagBestOf.style.backgroundColor = '#16a4fa';
};
tagClassic.onclick = () => {
  tagClassic.style.backgroundColor = '#16a4fa';
};
tagNonFiction.onclick = () => {
  tagNonFiction.style.backgroundColor = '#16a4fa';
};

const closeStarModal = document.getElementById('star-close');
const starModal = document.getElementById('star-modal');

closeStarModal.onclick = () => {
  document.getElementById('star-change-step').innerHTML = '';
  starModal.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
  starRating();
});
