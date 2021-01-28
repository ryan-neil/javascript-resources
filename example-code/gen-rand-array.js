// Generating a random array
function genArray() {
	let arrayLength = 5;
	let randomArray = [];

	for (let i = 0; i < arrayLength; i++) {
		randomArray.push(Math.floor(Math.random() * 100));
	}

	console.log(randomArray);
	return randomArray;
}
genArray();
