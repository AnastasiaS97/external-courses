function notSome(arrIn, callback) {
  for (let index = 0; index < arrIn.length; index += 1) {
    if (callback(arrIn[index], index, arrIn)) {
      return true;
    }
  }

  return false;
}

module.exports = notSome;
