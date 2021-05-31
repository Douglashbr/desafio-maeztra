/**
 * 
 *  @param {Number} qtd = 5
 * 
 */
const possibleCombinations = qtd => {
	let arr = [];
  let reducer = (acc, curr) => acc * curr;
  
  for (let i = 1; i <= qtd; i++) {
  	arr.push(i);
  }

	let qtdFinal = arr.reduce(reducer);
  return qtdFinal;
}
