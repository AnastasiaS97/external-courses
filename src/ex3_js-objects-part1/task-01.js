function createObject() {
  const newObject = {};
  newObject.valueNum = 1;
  newObject.valueStr = 'hello';
  newObject.valueBool = true;
  delete newObject.valueStr;
  return newObject;
}

module.exports = createObject;
