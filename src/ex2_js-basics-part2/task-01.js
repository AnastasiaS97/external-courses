function typeOfInput(value) {
  if (!isNaN(value)) {
    if (typeof value === number || string) {
      return typeof value;
    } else return "undefined";
  } else return "undefined";
}

module.exports = typeOfInput;
