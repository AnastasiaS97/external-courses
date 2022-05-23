const requestURL = 'https://jsonplaceholder.typicode.com/comments';
const dataNew = {
  postId: 123,
  name: 'Test',
  email: 'testuser1234@mail.mail',
  body: 'Lorem ipsum',
};

const myFetch = (method, url, data) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.responseType = 'json';
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.addEventListener('load', () => resolve(xhr.response));
  xhr.addEventListener('error', () => reject(xhr.response));
  xhr.send(JSON.stringify(data));
});

myFetch('GET', requestURL)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

myFetch('POST', requestURL, dataNew)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
