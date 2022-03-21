function getReverseStr(strIn) {
  const strOut = [...strIn];
  strOut.reverse();

  return strOut.join('');
}

module.exports = getReverseStr;
