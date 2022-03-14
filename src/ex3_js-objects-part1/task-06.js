function getProperty(object, propertyPath) {
  let objectValue = object;
  let path = propertyPath;
  path = path.split('.');
  const nestingLevel = path.length;
  for (let index = 0; index < nestingLevel; index += 1) {
    if (objectValue !== undefined) {
      objectValue = objectValue[path[index]];
    }
  }
  if (objectValue !== undefined) {
    return objectValue;
  }
  return undefined;
}

module.exports = getProperty;
