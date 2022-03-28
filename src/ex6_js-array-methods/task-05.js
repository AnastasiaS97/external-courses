function notMap(arrIn, callback) {
  let arrOut = [];
  for (let index = 0; index < arrIn.length; index += 1) {
    arrOut = [...arrOut, callback(arrIn[index], index, arrIn)];
  }

  return arrOut;
}

module.exports = notMap;
