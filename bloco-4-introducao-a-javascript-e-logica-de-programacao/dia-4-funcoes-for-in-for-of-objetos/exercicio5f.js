let arrayTest = [2, 3, 2, 5, 8, 2, 3];

function isBiggerInArray(array) {
	let times = 0;
	let bigger = 0;
	let arrayMostTimesPosition = 0;
	for (let i in array) {
		for (let j in array) {
			if (array[i] === array[j]){
				times += 1;
			}
		}
		if (times > bigger) {
			bigger = times;
			arrayMostTimesPosition = i;
		} 
		times = 0;
	}
	return array[arrayMostTimesPosition];
}

console.log(isBiggerInArray(arrayTest));