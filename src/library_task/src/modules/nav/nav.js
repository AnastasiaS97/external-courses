const addLogEntry = () => {
  const logEntry = document.createElement('li');
  logEntry.classList.add('log-entry');
  logEntry.innerHTML = `<i class="fa-solid fa-clock-rotate-left" style="color: #78829d; margin-right: 5px;"></i>You added <b>${document.getElementById('add-title').value}</b> by <b>${document.getElementById('add-author').value}</b> to the list of books.`;
  const booksLog = document.getElementById('log-list');
  booksLog.prepend(logEntry);

  return 0;
};

const filterLogEntry = (filter) => {
  const filterName = document.getElementById(filter).innerText;
  const logEntry = document.createElement('li');
  logEntry.classList.add('log-entry');
  logEntry.innerHTML = `<i class="fa-solid fa-clock-rotate-left" style="color: #78829d; margin-right: 5px;"></i>You used the <b>${filterName}</b> filter.`;
  const booksLog = document.getElementById('log-list');
  booksLog.prepend(logEntry);

  return 0;
};

const searchLogEntry = () => {
  const keywords = document.getElementById('search-bar').value;
  const logEntry = document.createElement('li');
  logEntry.classList.add('log-entry');
  logEntry.innerHTML = `<i class="fa-solid fa-clock-rotate-left" style="color: #78829d; margin-right: 5px;"></i>You searched for the keyword(s) <b>"${keywords}"</b>.`;
  const booksLog = document.getElementById('log-list');
  booksLog.prepend(logEntry);

  return 0;
};

const rateLogEntry = (title, rating) => {
  const logEntry = document.createElement('li');
  logEntry.classList.add('log-entry');
  logEntry.innerHTML = `<i class="fa-solid fa-clock-rotate-left" style="color: #78829d; margin-right: 5px;"></i>You changed the rating of <b>${title}</b> to <b>${rating}</b>.`;
  const booksLog = document.getElementById('log-list');
  booksLog.prepend(logEntry);

  return 0;
};

export {
  addLogEntry, filterLogEntry, searchLogEntry, rateLogEntry,
};
