/*
==========================================
Function Challenge 1: Password Validator
==========================================
Write a isValidPassword function that accepts 2 arguments: password and username.
Password must:
- be at least 8 characters
- cannot contain spaces
- cannot contain the username
If all requirements are met, return true
Otherwise: false
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
Function Challenge 2: Average of an Array
==========================================
Write a function to find the average value in an array of numbers.
let testScores = [ 86, 92, 78, 82 ];
*/

function avg(arr) {
	let total = 0;

	// loop over each num with "for of"
	for (let num of arr) {
		// add all nums in array to total
		total += num; // 338
	}
	let totalResult = total / arr.length;
	return totalResult;
	// or
	return total / arr.length;
}
avg(testScores); // 84.5

/*
==========================================
Function Challenge 3: Pangrams
==========================================
A pangram is a sentence that contains every letter of the alphabet, like:
"The quick brown fox jumps over the lazy dog"

Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. Make sure you ignore string casing.
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
Function Challenge 4: Get Playing Card
==========================================
Write a getCard() function which returns a random playing card object, like:
{
	value: 'K'
	suit: 'clubs'
}

Pick a random value from:
2,3,4,5,6,7,8,9,10,J,Q,K,A
Pick a random suit from:
'clubs', 'spades', 'hearts', 'diamonds'

Return both in an object
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
	const valuesIndex = Math.floor(
		Math.random() * valuesArr.length
	);
	// To select a random value from the array we do:
	valuesArr[valuesIndex];
	// We assign a variable (value) to values[valueIndex]
	const value = valuesArr[valuesIndex];

	// Now we need to do the same thing for the suits
	const suitsArr = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	const suitsIndex = Math.floor(
		Math.random() * suitsArr.length
	);
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
==========================================
Looping Challenge 1: Looping a Triangle
==========================================

Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

for (let line = '#'; line.length < 8; line += '#')
	console.log(line);

/* 
==========================================
Looping Challenge 2: FizzBuzz
==========================================
Write a program that uses console.log to print all the numbers from 0 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
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
Looping Challenge 3: Chessboard
==========================================
Write a program that creates a string that represents an 8x8 grid, using "newline" characters tom separate lines. At each position of the grid there is either a space or a # character. The characters should form a chessboard.

Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/
