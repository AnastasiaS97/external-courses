function checkProperty(propertyName, objectName) {
  if (objectName.hasOwnProperty(propertyName)) {
    return true;
  }
  return false;
}

module.exports = checkProperty;
