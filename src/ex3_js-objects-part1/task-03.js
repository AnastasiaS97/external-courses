function checkProperty(propertyName, objectName) {
  let exists = false;
  if (objectName.hasOwnProperty(propertyName)) {
    exists = true;
  }
  return exists;
}

module.exports = checkProperty;
