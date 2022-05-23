const debounce = (callback) => {
  let timeout;

  return (arg) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(arg), 500);
  };
};

const label = () => {
  const valueDebounce = document.getElementById('debounced').value;
  const valueRegular = document.getElementById('regular').value;
  document.getElementById('debounced-label').innerHTML = valueDebounce;
  document.getElementById('regular-label').innerHTML = valueRegular;
};

const inputDebounced = document.querySelector('.debounced-input');
const inputRegular = document.querySelector('.regular-input');
const debounceInput = debounce(label);
const regularInput = label;
inputDebounced.addEventListener('input', debounceInput);
inputRegular.addEventListener('input', regularInput);
