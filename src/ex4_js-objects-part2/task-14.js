function getRandomNum(min, max) {
  const multiplier = Math.floor(max) - Math.floor(min);

  return Math.floor(Math.random() * (multiplier + 1) + Math.floor(min));
}

module.exports = getRandomNum;
