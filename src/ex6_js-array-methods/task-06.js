function notReduce(arrIn, callback, initialValue) {
  let previousValue;
  if (initialValue || initialValue === 0) {
    previousValue = initialValue;
    for (let index = 0; index < arrIn.length; index += 1) {
      previousValue = callback(previousValue, arrIn[index], index, arrIn);
    }
  } else {
    previousValue = arrIn[0];
    for (let index = 1; index < arrIn.length; index += 1) {
      previousValue = callback(previousValue, arrIn[index], index, arrIn);
    }
  }

  return previousValue;
}

module.exports = notReduce;
