function typeOfInput(value) {
  if (!isNaN(value)) {
    switch (typeof value) {
      case 'number':
        return typeof value;
      case 'string':
        return typeof value;
      default:
        return undefined;
    }
  } else return undefined;
}

module.exports = typeOfInput;
