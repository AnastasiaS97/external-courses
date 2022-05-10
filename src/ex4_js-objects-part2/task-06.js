function getCapitalizedWords(strIn) {
  const words = strIn.split(' ');
  for (let index = 0; index < words.length; index += 1) {
    words[index] = words[index][0].toUpperCase() + words[index].slice(1);
  }

  return words.join(' ');
}

module.exports = getCapitalizedWords;
