function maxInArray(testArray) {
  let index = 0;
  let max = testArray[index];
  for (index = 1; index < testArray.length; index += 1) {
    if (testArray[index] > max) {
      max = testArray[index];
    }
  }
  return max;
}

module.exports = maxInArray;
