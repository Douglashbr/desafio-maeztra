/**
 * 
 * @param {Array} arr - [1, 2, 4, 4, 5, 6]
 * 
 */
const isDuplicated = arr => {
	const duplicatedNums = arr.filter((item, index) => arr.indexOf(item) !== index);
  
  return duplicatedNums.length > 0 ? 
        `Input ${arr} -> Output ${duplicatedNums}` :
        `Input ${arr} -> Nenhum número duplicado`;
}
