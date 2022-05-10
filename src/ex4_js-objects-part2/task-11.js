function getCharCount(strIn) {
  const characters = {};
  for (let index = 0; index < strIn.length; index += 1) {
    const char = strIn[index];
    if (characters[char]) {
      characters[char] += 1;
    } else characters[char] = 1;
  }
  for (let index = 0; index < strIn.length; index += 1) {
    if (Object.entries(characters)[index] !== undefined) {
      console.log(`${Object.keys(characters)[index]} occured ${Object.values(characters)[index]} times`);
    }
  }

  return undefined;
}

module.exports = getCharCount;
