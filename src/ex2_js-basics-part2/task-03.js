function evenAndOdd(testArray) {
  let index;
  let odd = 0;
  let even = 0;
  let zero = 0;
  for (index = 0; index < testArray.length; index += 1) {
    if (typeof testArray[index] === 'number') {
      switch (testArray[index] % 2) {
        case 0:
          if (testArray[index] === 0) {
            zero += 1;
          } else even += 1;
          break;
        case 1:
          odd += 1;
          break;
        default:
      }
    }
  }
  const outputArray = [even, odd, zero];

  return outputArray;
}

module.exports = evenAndOdd;
