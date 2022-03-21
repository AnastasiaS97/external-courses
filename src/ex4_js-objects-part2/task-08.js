function getLowercaseWords(strIn) {
  const words = strIn.split(' ');
  words[0] = words[0].toLowerCase();
  for (let index = 1; index < words.length; index += 1) {
    words[index] = words[index][0].toUpperCase() + words[index].slice(1).toLowerCase();
  }

  return words.join('');
}

module.exports = getLowercaseWords;
