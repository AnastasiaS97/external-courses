function addNewProperty(propertyName, objectName) {
  const newObject = objectName;
  if (!objectName.hasOwnProperty(propertyName)) {
    const newProperty = propertyName;
    newObject[newProperty] = 'new';
  }
  return newObject;
}

module.exports = addNewProperty;
