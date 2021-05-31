/**
 * 
 * @param {String} value - {[()(){}[]]{}}
 * 
 */
const stringIsValid = value => {
	const arrValue = value.split('');
  const openers = ['(', '{', '['];
  const closers = [')', '}', ']'];
  let count = 0;
  let invalid = false;
  
  for (let i = 0; i < arrValue.length; i++) {
    if (openers.indexOf(arrValue[i]) !== -1){
    	count++;
    }else if(closers.indexOf(arrValue[i]) !== -1){
    	count--;
      let closerIndex = closers.indexOf(arrValue[i]);
      if (openers.indexOf(arrValue[i - 1]) !== -1) {
      	if (arrValue[i - 1] !== openers[closerIndex]){
          invalid = true;
        }
      }
    }
  }

  return count === 0 && !invalid ? 
  `${value} é uma sequência válida!` : 
  `${value} não é uma sequência válida!`
}