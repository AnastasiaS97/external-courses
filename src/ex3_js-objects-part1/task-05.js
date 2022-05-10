function copyObject(objectName) {
  const copy = {
    ...objectName,
  };
  return copy;
}

module.exports = copyObject;
