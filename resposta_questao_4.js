/**
 * @param {Array} vetor - [[1900,1950],[1920,1960],[1940,1980]]
 */
const jobedYears = (vetor) => {
	let start = 0,
  		end = 0;
      
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i][0] > 0 && vetor[i][0] < vetor[i][1]) {
      if (i === 0) {
        start = vetor[i][0];
        end = vetor[i][1]
      }else{
        if (start > 0 && start < vetor[i][0]) {
          start = vetor[i][0];
        }
        if (end > 0 && end > vetor[i][1]) {
          end = vetor[i][1];
        }
      }
    }
  }
  
  return `O período de anos que teve mais pessoas trabalhando foi entre ${start} e ${end}`;
}