/**
 * 
 * @param {number} num - 123455678 
 * 
 */
const isOrdened = num => {
	if (num > 0) {
		const arrayNum = num.toString().split('').map(n => +n);
		const arrayOrdenadaDesc = new Array(...arrayNum),
					arrayOrdenadaAsc = new Array(...arrayNum);
		
		arrayOrdenadaDesc.sort((a, b) => a - b);
		arrayOrdenadaAsc.sort((a, b) => b - a);

		let validations = (
			arrayNum.join(',') === arrayOrdenadaDesc.join(',') || 
			arrayNum.join(',') === arrayOrdenadaAsc.join(',')
		)

		for (let i = 0; i < arrayNum.length; i++) {
			if (
				arrayNum[i + 1] > arrayNum[i] + 1 ||
				arrayNum[i + 1] < arrayNum[i] - 1  
			){
				validations = false
			}
		}

		if (validations) {
			return `Input ${num} -> Está ordenado!`
		}else{
			return `Input ${num} -> Não está ordenado!`
		}
	}
}