const wordSearch = (letters, word) => { 

  if (letters.length === 0){ 
      return false;
  } else {
  const horizontalJoin = letters.map(ls => ls.join(''))  
  for (const l of horizontalJoin) {
      if (l.includes(word)) return true
  }  
  for (let c = 0; c < letters[0].length; c++) {
    let newRow = [];
    for (let r = 0; r < letters.length; r++) {
      newRow.push(letters[r][c]);
    }
    newRow = newRow.join('');
    if (newRow.includes(word)) return true 
  }
  return false; 
  } 
}

module.exports = wordSearch 



