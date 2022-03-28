function notFilter(arrIn, callback) {
  let arrOut = [];
  for (let index = 0; index < arrIn.length; index += 1) {
    if (callback(arrIn[index], index, arrIn)) {
      arrOut = [...arrOut, arrIn[index]];
    }
  }

  return arrOut;
}

module.exports = notFilter;
