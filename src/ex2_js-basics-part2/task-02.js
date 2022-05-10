function arrayElements(testArray) {
  let index;
  for (index = 0; index < testArray.length; index += 1) {
    console.log(testArray[index]);
  }
  console.log(testArray.length);

  return undefined;
}

module.exports = arrayElements;
