/*
JavaScript Notes and Documentation
Functions:
*/

/*
===================================
Functions
===================================
- A "Function" is simple a reusable procedure. Functions allow us to write reusable, modular code. We define a "chunk" of code that we can then execute at a later point.

Syntax: Define and Run
// Define
function funcName() {
	// some code
}
// Run
funcName();
*/

// Example 1:
function grumpus() {
	console.log('ugh...you again...');
	console.log('for the last time...');
	console.log('LEAVE ME ALONE!!!');
}
grumpus();
// ugh...you again...
// for the last time...
// LEAVE ME ALONE!!!

/*
===================================
Real Function Example
===================================
*/

// Example 1: Dice Roll
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}
rollDie();
// Rolled: 2

// to roll multiple dice at once:
function throwDice() {
	rollDie();
	rollDie();
	rollDie();
}
throwDice();
// Rolled: 3
// Rolled: 5
// Rolled: 1

/*
===================================
Arguments
===================================
- Functions that accept inputs are called "arguments"
*/

// Example 1:
function greet(person) {
	console.log(`Hi, ${person}!`);
}
greet('Ryan'); // Hi, Ryan!

// Example 2: Modifying Dice Roll
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
	for (let i = 0; i < numRolls; i++) {
		rollDie();
	}
}
throwDice(3);
// Rolled: 4
// Rolled: 6
// Rolled: 2

/*
===================================
Functions with Multiple Arguments
===================================
*/

// Proper Naming Convention:
function square(num) {
	console.log(num * num);
}
square(4); // 16
// "num" is the "parameter"
// "4" is the "argument"

// Example 1: A function with multiple parameters ** also known as a function that expects multiple arguments to be passed in.
function sum(x, y) {
	console.log(x + y);
}
sum(4, 5); // 9 * in this example, order does not matter

// Example 2: Where order of arguments DOES matter
function divide(a, b) {
	console.log(a / b);
}
divide(1, 4); // 0.25
divide(4, 1); // 4

/*
===================================
Return Statement
===================================
-The "return" statement ends function execution AND specifies the value to be returned by that function. No code that comes after the "return" will run.
*/

const yell = 'I will end you!'.toUpperCase();
yell; // I WILL END YOU!

const idx = [ 'a', 'b', 'c' ].indexOf('c');
console.log(idx); // 2

// Example 1:
function add(x, y) {
	return x + y;
}
const sum = add(4, 5);
sum; // 9
const answer = add(100, 200);
answer; // 300

// Example 2:
function avg(x, y) {
	return (x + y) / 2;
}
const avgMovieRating = avg(3, 4.8); // 3.9
console.log(`Average Movie Rating: ${avgMovieRating}`);
// Average Movie Rating: 3.9

// Example 2: function with an "if"
function isPurple(color) {
	if (color === 'purple') {
		return true;
		console.log('YAY!'); // this does not run
	} else {
		return false;
	}
}
isPurple('purple'); // true
isPurple('blue'); // false

// Example 2.1: We can shorten the return if it is a boolean
function isPurple(color) {
	return color.toLowerCase() === 'purple';
}
isPurple('purple'); // true
isPurple('blue'); // false

// Example 3: A function looping over an array
function containsPurple(arr) {
	for (let color of arr) {
		if (color === 'purple' || color === 'magenta') {
			return true;
		}
	}
	return false; // **this "return" is placed outside the "if" statement or else the array would not be looped
}
containsPurple([ 'blue', 'red', 'magenta' ]); // true
containsPurple([ 'blue', 'red', 'yellow' ]); // false

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
Functions in Detail
==========================================
Important things to know regarding functions:
- Understanding Scope
- Write higher order functions
- Pass functions as callbacks
*/

/*
Scope: 
- Variable "visibility"
- The location where a variable is defined dictates where we have access to that variable.
*/
// Function Scope:
let bird = 'eagle';

function birdWatch() {
	let bird = 'hawk';
	return bird; // -> 'hawk'
}
bird; // -> 'eagle'

// Block Scope:
if (true) {
	let animal = 'eel';
	console.log(animal); // -> 'eel'
}
console.log(animal); // -> not defined
// animal is scoped to the conditional block

// Example 1: Double an Array
function doubleArr(arr) {
	const result = [];
	for (let num of arr) {
		let double = num * 2; // doubles the number in the array
		result.push(double); // adds the doubles number to the empty array
	}
	return result;
}
doubleArr([ 2, 4, 6 ]); // -> [ 4, 8, 12 ]
// result is bound to doubleArr function
// double is bound to for loop block

// Lexical Scope:
// A variable declared in one function is available to nested functions within it but not vice versa.
function outer() {
	let movie = 'Inception';

	function inner() {
		console.log(movie.toUpperCase()); // -> 'INCEPTION'
	}
	inner();
}
outer();

/*
==========================================
Function Expressions
==========================================
- In JavaScript functions are objects which means we can store them in variables, we can store them in an array, and we can pass them around as arguments, functionName([ otherFunction ]).
*/

// Old Syntax:
function square(num) {
	return num + num;
}
square(7); // 49

// New Method Syntax:
const square = function(num) {
	return num + num;
};
square(7); // 49

/*
==========================================
Functions as Objects continued...
==========================================
*/

// Storing functions in an array
function add(x, y) {
	return x + y;
}

const subtract = function(x, y) {
	return x - y;
};

function multiply(x, y) {
	return x * y;
}

const divide = function(x, y) {
	return x / y;
};

// add them all to an array
const operations = [ add, subtract, multiply, divide ];

operations[1](100, 4); // -> 96 (subtract)
operations[2](100, 4); // -> 400 (multiply)
// or
subtract(100 - 4); // -> 96
multiply(100 - 4); // -> 400

// looping over operations
for (let func of operations) {
	let result = func(30, 5);
	console.log(result);
}
// -> 35 (add)
// -> 25 (subtract)
// -> 150 (multiply)
// -> 6 (divide)

// storing them in an object
const thing = {
	// storing a function as a value in an object (multiply)
	doSomething : multiply // key is doSomething, value is multiply
};
thing.doSomething(50, 2); // -> 100
// ** by adding a function to an object we're creating a method **

/*
==========================================
Higher Order Functions
==========================================
Functions that operate on/with other functions. They can:
- Accept other functions as arguments
- Return a function
*/

// Example 1: A function that accepts a function as an argument
function callTwice(func) {
	func();
	func();
}

function laugh() {
	console.log('Hahaha');
}
callTwice(laugh);
// -> "Hahaha" (x2)

// Example 1.1: Looping a function inside another function
function laugh() {
	console.log('Hahaha');
}

function repeatNTimes(func, num) {
	for (let i = 0; i < num; i++) {
		func();
	}
}
repeatNTimes(laugh, 7);
// -> "Hahaha" (x7)

// Example 1.2: Picking a function to run at random
function laugh() {
	console.log('Hahaha!');
}

function rage() {
	console.log('I hate you!');
}

function pickOne(f1, f2) {
	let randNum = Math.random();
	console.log(randNum);
	if (randNum < 0.5) {
		f1();
	} else {
		f2();
	}
}
pickOne(laugh, rage);
// -> 0.3362672844438229
// -> Hahaha!

/*
==========================================
Functions as a Return Value
==========================================
- Returning a function from within a function.
- We can think of these functions as "function factories".
- It's important to remember functions are just values that can be passed around as arguments or as return values.
*/
function makeBetweenFunc(min, max) {
	return function(val) {
		return val >= min && val <= max;
	};
}
const inAgeRange = makeBetweenFunc(18, 100);
inAgeRange(17); // -> false
inAgeRange(68); // -> true

// Example 1:
// the multiplyBy function acts as the "factory", able to produce more/altered functions
function multiplyBy(num) {
	return function(x) {
		return x * num;
	};
}

// this gives us a new function called triple()
const triple = multiplyBy(3);
triple(6); // -> 18

// we can make another function called double() from the same "factory"
const double = multiplyBy(2);
double(8); // -> 16

const halve = multiplyBy(0.5);
double(6); // -> 3

// Example 2: Check if a value is between two numbers
function makeBetweenFunc(x, y) {
	// we want to compare "num" to x and y
	return function(num) {
		return num >= x && num <= y;
	};
}
const isChild = makeBetweenFunc(0, 18);
isChild(9); // -> true
isChild(26); // -> false

const isNinties = makeBetweenFunc(1990, 1999);
isNinties(1992); // -> true
isNinties(2021); // -> false

const isNiceWeather = makeBetweenFunc(65, 90);
isNiceWeather(73); // -> true
isNiceWeather(98); // -> false
