function checkProperty(propertyName, objectName) {
  return (propertyName in objectName);
}

module.exports = checkProperty;
