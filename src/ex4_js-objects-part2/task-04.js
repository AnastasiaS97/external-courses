function getUppercaseStr(strIn) {
  const strOut = strIn[0].toUpperCase() + strIn.slice(1);

  return strOut;
}

module.exports = getUppercaseStr;
