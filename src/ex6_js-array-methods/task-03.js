function notEvery(arrIn, callback) {
  for (let index = 0; index < arrIn.length; index += 1) {
    if (!callback(arrIn[index], index, arrIn)) {
      return false;
    }
  }

  return true;
}

module.exports = notEvery;
