function deepClone(objectOriginal) {
  let objectCopyOutput;
  let value = objectOriginal;
  if (Array.isArray(objectOriginal)) {
    const objectCopy = [];
    Object.keys(objectOriginal).forEach((key) => {
      value = objectOriginal[key];
      if (typeof value === 'object') {
        objectCopy[key] = deepClone(value);
      } else if (Array.isArray(value)) {
        objectCopy[key].push(value);
      } else {
        objectCopy[key] = value;
      }
    });
    objectCopyOutput = objectCopy;
  } else if (typeof objectOriginal === 'object') {
    const objectCopy = {};
    Object.keys(objectOriginal).forEach((key) => {
      value = objectOriginal[key];
      if (typeof value === 'object') {
        objectCopy[key] = deepClone(value);
      } else if (Array.isArray(value)) {
        objectCopy[key].push(value);
      } else {
        objectCopy[key] = value;
      }
    });
    objectCopyOutput = objectCopy;
  }
  return objectCopyOutput;
}

module.exports = deepClone;
