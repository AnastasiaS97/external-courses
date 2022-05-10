function getSubstrIntoStr(strIn, subStrIn, position) {
  const strOut = strIn.split(' ');
  strOut.splice(position + 1, 0, subStrIn);

  return strOut.join(' ');
}

module.exports = getSubstrIntoStr;
