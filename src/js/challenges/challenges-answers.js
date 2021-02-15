/*
Colt Steele Challenges
*/

/*
==========================================
Function Challenge 1: Password Validator Answer
==========================================
*/
function isValidPassword(password, username) {
	// finding the length of the password
	if (password.length < 8) {
		return false;
	}
	// checking if there is a space in the password. indexOf will give us "-1" if that character is NOT in there. so we want to receive "-1".
	if (password.indexOf(' ') !== -1) {
		return false;
	}
	// checking if the password contains the username. same method as checking for a space.
	if (password.indexOf(username) !== -1) {
		return false;
	}
	return true;
}
isValidPassword('harley2014', 'ryanjneil');
// true
isValidPassword('harley 2014', 'ryanjneil');
// false (space in password)
isValidPassword('ryanjneil', 'ryanjneil');
// false (password contains username)

// ** Another way to write this function **
function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const hasUsername = password.indexOf(username) !== -1;
	if (tooShort || hasSpace || hasUsername) return false;
	return true;
}

/*
==========================================
Function Challenge 2: Average of an Array Answer
==========================================
*/
function avg(arr) {
	let total = 0;

	// loop over each num with "for of"
	for (let num of arr) {
		// add all nums in array to total
		total += num; // -> 338 (total = total + nums)
	}
	let totalResult = total / arr.length;
	return totalResult;
	// or
	return total / arr.length;
}
avg(testScores); // 84.5

/*
==========================================
Function Challenge 3: Pangrams Answer
==========================================
*/
function isPangram(sentence) {
	// create a variable to hold the alphabet
	let alph = 'abcdefghijklmnopqrstuvwxyz';

	// loop over the alphabet
	for (let char of alph) {
		if (sentence.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}
isPangram('pack my box with five dozen liquor jugs.'); // true

// ** How to account for uppercase words **
function isPangram(sentence) {
	// we lowercase whatever sentence comes in
	let lowerCaseSent = sentence.toLowerCase();
	let alph = 'abcdefghijklmnopqrstuvwxyz';

	for (let char of alph) {
		// call lowerCaseSent.indexOf() here, not sentence
		if (lowerCaseSent.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}
isPangram('Pack my Box with Five Dozen Liquor Jugs.'); // true

// ** A more efficient way to write this function with .includes() **
function isPangram(sentence) {
	let lowerCaseSent = sentence.toLowerCase();
	let alph = 'abcdefghijklmnopqrstuvwxyz';

	for (let char of alph) {
		// call lowerCaseSent.includes() here, not .indexOf()
		if (!lowerCaseSent.includes(char)) {
			return false;
		}
	}
	return true;
}
isPangram('Pack my Box with Five Dozen Liquor Jugs.'); // true

/*
==========================================
Function Challenge 4: Get Playing Card Answer
==========================================
*/
function getCard() {
	// We turn the values into an array and assign it a variable
	const valuesArr = [
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	];

	// We want to pick one of the values randomly. To do this we need to generate a random number that corresponds to an index, starting at 0 and ending at the last value (13).
	// Math.random() gives us a decimal from 0 to 1 but not 1 (0.99 max).
	Math.random();
	// Multiplying by values.length will give us a decimal from 0 to 13 but not 13 (12.99 max).
	Math.random() * valuesArr.length;
	// Math.floor() removes all decimals and returns a number from 0 to 12.
	Math.floor(Math.random() * valuesArr.length);
	// Assign a variable to the equation
	const valuesIndex = Math.floor(Math.random() * valuesArr.length);
	// To select a random value from the array we do:
	valuesArr[valuesIndex];
	// We assign a variable (value) to values[valueIndex]
	const value = valuesArr[valuesIndex];

	// Now we need to do the same thing for the suits
	const suitsArr = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	const suitsIndex = Math.floor(Math.random() * suitsArr.length);
	const suit = suitsArr[suitsIndex];

	// Now we need to return an object
	return {
		value : value,
		suit  : suit
	};
}
getCard();
// Object { value: "Q", suit: "hearts" }
// Object { value: "J", suit: "clubs" }
// Object { value: "6", suit: "spades" } ... etc

// ** Another way to write this function **
// Anytime we're repeating functionality, as in doing something multiple times. It's a good indication that we could make a new function and use the function multiple times.
// We create the reusable function "pick()":
function pick(arr) {
	const arrIdx = Math.floor(Math.random() * arr.length);
	return arr[arrIdx];
}

function getCard() {
	// since they aren't all numbers we make them all strings
	const valArr = [
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	];

	// to select a random index in the array using the pick function
	const totVal = pick(valArr);

	// now for the suits
	const valSuits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	const totSuit = pick(valSuits);

	// return an object
	return {
		value : totVal,
		suit  : totSuit
	};
}
getCard();
// Object { value: "7", suit: "hearts" }
// Object { value: "2", suit: "spades" } ... etc

// ** To refactor even more... **
function pick(arr) {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

function getCard() {
	const valueArr = [
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	];

	const suitArr = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	// we don't have to create variables if we don't want to we can add them right in line of the return object.
	return { value: pick(valueArr), suit: pick(suitArr) };
}
getCard();

/*
Eloquent JavaScript Challenges
*/

/* 
==========================================
Looping Challenge 1: Looping a Triangle Answer
==========================================
*/
for (let line = '#'; line.length < 8; line += '#') console.log(line);

/* 
==========================================
Looping Challenge 2: FizzBuzz
==========================================
*/
for (let n = 1; n <= 100; n++) {
	let output = '';
	if (n % 3 === 0) {
		output = output + 'Fizz';
		// output += 'Fizz';
	}
	if (n % 5 === 0) {
		output = output + 'Buzz';
		// output += 'Buzz';
	}
	console.log(output || n);
}
console.log('Loop is done!');

/* 
==========================================
Looping Challenge 3: Chessboard Answer
==========================================
*/
let size = 8;
let board = '';

for (let y = 0; y < size; y++) {
	for (let x = 0; x < size; x++) {
		if ((x + y) % 2 == 0) {
			board += ' ';
		} else {
			board += '#';
		}
	}
	board += '\n';
}
console.log(board);

/* 
==========================================
Function Challenge 1: Minimum
==========================================
*/
function min(a, b) {
	if (a < b) return a;
	else return b;
}
console.log(min(0, 10)); // → 0
console.log(min(0, -10)); // → -10

/* 
==========================================
Function Challenge 2: Recursion
==========================================
*/
function isEven(n) {
	if (n == 0) return true;
	else if (n == 1) return false;
	else if (n < 0) return isEven(-n);
	else return isEven(n - 2);
}
console.log(isEven(50)); // → true
console.log(isEven(75)); // → false
console.log(isEven(-1)); // → false

/* 
==========================================
Function Challenge 3: Bean Counting
==========================================
*/
function countChar(string, char) {
	let counted = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === char) {
			counted += 1;
		}
	}
	return counted;
}

function countBs(string) {
	return countChar(string, 'B');
}
console.log(countBs('BBC')); // → 2
console.log(countChar('kakkerlak', 'k')); // → 4

/* 
==========================================
Data Structures: Objects and Arrays Challenge 1: 
The Sum of a Range
==========================================
*/
function range(start, end, step = start < end ? 1 : -1) {
	let array = [];

	if (step > 0) {
		for (let i = start; i <= end; i += step) array.push(i);
	} else {
		for (let i = start; i >= end; i += step) array.push(i);
	}
	return array;
}

function sum(array) {
	let total = 0;
	for (let value of array) {
		total += value;
	}
	return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

/* 
==========================================
Data Structures: Objects and Arrays Challenge 2: 
Reversing an array
==========================================
*/
function reverseArray(array) {
	let output = [];
	for (let i = array.length - 1; i >= 0; i--) {
		output.push(array[i]);
	}
	return output;
}

function reverseArrayInPlace(array) {
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
		let old = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = old;
	}
	return array;
}

console.log(reverseArray([ 'A', 'B', 'C' ]));
// → ["C", "B", "A"];
let arrayValue = [ 1, 2, 3, 4, 5 ];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
