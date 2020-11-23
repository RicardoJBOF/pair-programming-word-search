//FUNCTION IMPLEMENTATION
const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  } else {
    const horizontal = letters.map((ls) => ls.join(""));
    for (const letter of horizontal) {
      if (letter.includes(word)) return true;
    }
    for (let x = 0; x < letters[0].length; x++) {
      let vertical = [];
      for (let y = 0; y < letters.length; y++) {
        vertical.push(letters[y][x]);
      }
      vertical = vertical.join("");
      if (vertical.includes(word)) return true;
    }
    return false;
  }
};

//EXPORT MODULE
module.exports = wordSearch;
