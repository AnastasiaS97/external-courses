function sameElements(testArray) {
  let index;
  let indexCompared;
  let equal = true;
  for (index = 0; index < testArray.length; index += 1) {
    for (
      indexCompared = index + 1;
      indexCompared < testArray.length;
      indexCompared += 1
    ) {
      if (testArray[index] !== testArray[indexCompared]) {
        equal = false;
        break;
      }
    }
  }
  return equal;
}

module.exports = sameElements;
