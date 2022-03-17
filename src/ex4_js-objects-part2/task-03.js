function getStrDelSpaces(strIn) {
  let strOut = [...strIn];
  strOut = strOut.reverse();
  for (let index = 0; index < strOut.length; index += 1) {
    if (strOut[index] === ' ') {
      strOut.splice(index, 1);
      break;
    }
  }
  strOut = strOut.reverse();
  for (let index = 0; index < strOut.length; index += 1) {
    if (strOut[index] === ' ') {
      strOut.splice(index, 1);
      break;
    }
  }

  return strOut.join('');
}

module.exports = getStrDelSpaces;
