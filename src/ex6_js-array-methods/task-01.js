function notSlice(arrIn, start = 0, end = arrIn.length) {
  const endReverse = arrIn.length + end;
  let startReverse = arrIn.length + start;
  let reverse;
  let endReal = end;
  let arrOut = [];
  if (Math.abs(startReverse) >= arrIn.length) {
    startReverse = 0;
  }
  if (end > arrIn.length) {
    endReal = arrIn.length;
  }
  if (start < 0 && end < 0) {
    reverse = 1;
  } else if (start < 0 && end > 0) {
    reverse = 2;
  } else if (start > 0 && end < 0) {
    reverse = 3;
  }
  switch (reverse) {
    case 1:
      for (let index = startReverse; index < endReverse; index += 1) {
        arrOut = [...arrOut, arrIn[index]];
      }
      break;
    case 2:
      for (let index = startReverse; index < end; index += 1) {
        arrOut = [...arrOut, arrIn[index]];
      }
      break;
    case 3:
      for (let index = start; index < endReverse; index += 1) {
        arrOut = [...arrOut, arrIn[index]];
      }
      break;
    default: for (let index = start; index < endReal; index += 1) {
      arrOut = [...arrOut, arrIn[index]];
    }
  }

  return arrOut;
}

module.exports = notSlice;
