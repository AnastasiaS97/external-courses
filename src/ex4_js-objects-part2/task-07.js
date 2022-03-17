function getStrOfLength(strIn, strLengthIn) {
  const strLength = strIn.length;
  let strOut = strIn;
  if (strLength > strLengthIn) {
    strOut = strIn.substr(0, strLengthIn - 1) + '…'.repeat(strLength - strLengthIn - 1);
  }

  return strOut;
}

module.exports = getStrOfLength;
