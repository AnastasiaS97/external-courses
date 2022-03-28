function notSlice(arrIn, start = 0, end = arrIn.length) {
  const arrOut = [];
  const endReverse = arrIn.length + end;
  let startReverse = arrIn.length + start;
  let reverse;
  let endReal = end;
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
      for (let indexIn = startReverse, indexOut = 0;
        indexIn < endReverse;
        indexIn += 1, indexOut += 1) {
        arrOut[indexOut] = arrIn[indexIn];
      }
      break;
    case 2:
      for (let indexIn = startReverse, indexOut = 0;
        indexIn < end;
        indexIn += 1, indexOut += 1) {
        arrOut[indexOut] = arrIn[indexIn];
      }
      break;
    case 3:
      for (let indexIn = start, indexOut = 0;
        indexIn < endReverse;
        indexIn += 1, indexOut += 1) {
        arrOut[indexOut] = arrIn[indexIn];
      }
      break;
    default: for (let indexIn = start, indexOut = 0;
      indexIn < endReal;
      indexIn += 1, indexOut += 1) {
      arrOut[indexOut] = arrIn[indexIn];
    }
  }

  return arrOut;
}

module.exports = notSlice;
