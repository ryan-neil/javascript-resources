// Practice
// Cmd + Option + K (Console Shortcut)

const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];

function printDouble(n2) {
	console.log(n2 * 2);
}

function printTriple(n3) {
	console.log(n3 * 3);
}

numbers.forEach(printDouble);
// 40, 42, 44, 46, etc...
console.log('End double');

numbers.forEach(printTriple);
// 60, 63, 66, 69, etc...
console.log('End triple');
