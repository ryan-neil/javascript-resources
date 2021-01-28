// Average in an array of numbers
function avgValue(arr) {
	let total = 0;

	// print out the array
	for (let num of arr) {
		// gets total value of array numbers
		total += num;
	}
	// set final number (average of the numbers in the array) to variable
	// divide the total value of array and divides by the length of the array. Remove the decimal for whole number with (Math.floor)
	let totalAvg = Math.floor(total / arr.length);

	console.log(totalAvg);
	return totalAvg;
}
avgValue([ 98, 77, 84, 91, 57, 66 ]); // 78
