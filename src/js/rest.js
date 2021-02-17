/*
JavaScript Notes and Documentation
Rest:
*/

/*
==========================================
Rest
==========================================
- Collects arguments or data down into a single array.
- Almost like the opposite of "spread".
- Primarily used when we want to make functions that accept an unlimited number of arguments or a variable number of arguments.
*/
function sumAll(...nums) {
	let total = 0;
	for (let n of nums) {
		total += n;
	}
	return total;
}
sumAll(1, 2); // -> 3

// .reduce() method
function sumAll(...nums) {
	// this time we do not need to make it an array because ...nums already does this for us
	return nums.reduce((total, currVal) => {
		return total + currVal;
	});
}
sumAll(3, 4); // -> 7

// Example 1:
function fullName(first, last, ...titles) {
	console.log('first:', first);
	console.log('last:', last);
	console.log('titles:', titles);
}
fullName('tom', 'jones', 'III', 'order of the phoenix');
// -> first: tom
// -> last: jones
// -> titles: [ "III", "order of the phoenix" ]
// ** after "tom" and "jones" the rest of the parameters get caught in "...titles" **

// Example 2: Multiply all numbers of an array
// implicit method
const multiplyFunc = (...nums) =>
	nums.reduce((total, currVal) => {
		return total * currVal;
	});
multiplyFunc(10, 10); // -> 100
// or
// double implicit method (one line)
const multiplyFunc = (...nums) =>
	nums.reduce((total, currVal) => total * currVal);
multiplyFunc(2, 10); // -> 20
