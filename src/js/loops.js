/*
JavaScript Notes and Documentation
Loops:
*/

/*
===================================
Loops (Repeating Code)
===================================
- Loops allow us repeat code. For example, print 'hello' 10 times or sum of all numbers in an array.
*/

// Syntax:
for (
	[ initialExpression ];
	[ condition ];
	[ incrementExpression ]
) {
	// Some code here (console.log "initialExpression");
}

// Example 1:
// (We assign the value of 1 to 'i';
// as long as i is less than or equal to 10 we loop through;
// as long as we're still looping add 1 to 'i')
// Concise explanation: (start at 1; stop at 10; add 1 each time)
for (let i = 1; i <= 10; i++) {
	console.log('Hello!', i);
}
// Hello! 1
// Hello! 2
// Hello! 3
// Hello! 4
// Hello! 5 ... 10

// Example 2: Generate 20 perfect squares (a number times itself)
// 1 : 1x1
// 4 : 2x2
// 9 : 3x3
// 16 : 4x4
// 25 : 5x5
// 36 : 6x6
// 49 : 7x7 etc.

// to do this we need to loop from 1-20 and then console.log each number times itself.
for (let num = 1; num <= 20; num++) {
	console.log(`${num}x${num} = ${num * num}`);
}
// 1x1 = 1
// 2x2 = 4
// 3x3 = 9
// 4x4 = 16 ... 20x20 = 400

// Example 3: Loop backwards from '50' to '0' in intervals of '10' (Start i at 50, subtract 10 each iteration, keep going as long as i >= 0).
for (let i = 50; i >= 0; i -= 10) {
	console.log(i);
}
// 50
// 40
// 30 ... 0

// Example 4: Loop backwards from 200 to 0 in intervals of 25.
for (let i = 200; i >= 0; i -= 25) {
	console.log(i);
}
// 200
// 175
// 150 ... 0

/*
===================================
Infinite Loops!!!
===================================
*/

for (let i = 20; i >= 0; i++) {
	console.log(i); // This is an infinite loop! 'i' will always be greater or equal to '0'.
}

/*
===================================
For Loops + Arrays
===================================
- When looping over an Array, start at '0' and continue to the last index of the Array (length - 1).
*/

const animals = [ 'lions', 'tigers', 'bears' ];

for (let i = 0; i < animals.length; i++) {
	console.log(i, animals[i]);
}
// 0 'lions'
// 1 'tigers'
// 2 'bears'

// Example 1: Test scores of multiple students
const examScores = [ 98, 77, 84, 91, 57, 66 ];

// iterate over the array and generate a variable ('i') that starts a '0' because the first element starts at index '0'. We then want to go until the end of the array but not past it.
for (let i = 0; i < examScores.length; i++) {
	console.log(examScores[i]);
}
// 0 98
// 1 77
// 2 84
// 3 91
// 4 57
// 5 66

// Example 2: Looping through an Array. Students information. Each student is an object inside an array.
const myStudents = [
	{
		firstName : 'Zeus',
		grade     : 86
	},
	{
		firstName : 'Artemis',
		grade     : 97
	},
	{
		firstName : 'Hera',
		grade     : 72
	},
	{
		firstName : 'Apollo',
		grade     : 90
	}
];
// the standard pattern to loop over an array is to start at index of '0' (let i = 0).
for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	console.log(`${student.firstName} scored ${student.grade}`);
}
// Zeus scored 86
// Artemis scored 97
// Hera scored 72
// Apollo scored 90

// Example 3: Looping through a String (same approach as looping through an Array)
const word = 'stressed';

for (let i = 0; i < word.length; i++) {
	console.log(word[i]);
}
// s
// t
// r
// e
// s
// e
// d

// Example 3.1: Looping Backwards
// * We can save the reversed word into a new variable like this:
const word = 'stressed';

for (let i = word.length - 1; i >= 0; i--) {
	let reversedWord = word[i];
	console.log(reversedWord);
}
// d
// e
// s
// s
// e
// r
// t
// s

// Example 4: Finding the average of the students scores.
const myStudents = [
	{
		firstName : 'Zeus',
		grade     : 86
	},
	{
		firstName : 'Artemis',
		grade     : 97
	},
	{
		firstName : 'Hera',
		grade     : 72
	},
	{
		firstName : 'Apollo',
		grade     : 90
	}
];
// We need a variable to hold all the "sums". Once the loop is done we will have a total that we then need to divide by the number of students (grades).
let total = 0;

for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	total += student.grade;
}
console.log(total / myStudents.length); // 86.25
console.log(
	`The class average was ${total / myStudents.length}%`
); // The class average was 86.25%

/*
===================================
Nested For Loops
===================================
*/

// Example 1:
for (let i = 1; i <= 10; i++) {
	console.log('OUTER LOOP', i);
	for (let j = 10; j >= 0; j -= 2) {
		console.log('   INNER LOOP', j);
	}
}
// OUTER LOOP 1
//  	INNER LOOP 10
//  	INNER LOOP 8
//  	INNER LOOP 6
//  	INNER LOOP 4
//  	INNER LOOP 2
//  	INNER LOOP 0
// OUTER LOOP 2
//  	INNER LOOP 10
//  	INNER LOOP 8
//  	INNER LOOP 6
//  	INNER LOOP 4
//  	INNER LOOP 2
//  	INNER LOOP 0 ... OUTER LOOP 10

// Example 2: The game 2048. This is a more practical example of nested for loops.
const gameBoard = [
	[ 4, 32, 8, 4 ],
	[ 64, 8, 32, 2 ],
	[ 8, 32, 16, 4 ],
	[ 2, 8, 4, 2 ]
];

for (let i = 0; i < gameBoard.length; i++) {
	let row = gameBoard[i];
	console.log(row);
	for (let j = 0; j < row.length; j++) {
		console.log(row[j]);
	}
}
// Array [ 4, 32, 8, 4 ]
// 4
// 32
// 8
// 4
// Array [ 64, 8, 32, 2 ]
// 64
// 8
// 32
// 2 ... etc.

// Example 2.1: Sum it all together
const gameBoard = [
	[ 4, 32, 8, 4 ],
	[ 64, 8, 32, 2 ],
	[ 8, 32, 16, 4 ],
	[ 2, 8, 4, 2 ]
];

let totalScore = 0;

for (let i = 0; i < gameBoard.length; i++) {
	let row = gameBoard[i];
	for (let j = 0; j < row.length; j++) {
		totalScore += row[j];
	}
}
console.log(totalScore); // 230

/*
===================================
While Loops
===================================
- A while loop will continue to run as long as its test condition is true.
*/

// Syntax:
let num = 0;
while (num < 10) {
	console.log(num);
	num++;
}
// 0
// 1
// 2
// 3
// 4 ... 9

// ** Where "while" loops excel is when you don't know exactly how many times the loop is going to run (we don't know we're going from 0 - 10 or to 20,  etc). **
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
	console.log(`Target: ${target} Guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('Congratulations you guessed it!');
// Target: 4 Guess: 6
// Target: 4 Guess: 9
// Target: 4 Guess: 4
// Congratulations you guessed it!

// ** Logic behind this:
// while (some condition) -> [guess !== target]
// in the loop, update or attempt to make that condition false -> [guess = Math.floor(Math.random() * 10);]

/*
===================================
Break Keyword
===================================
*/

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (true) {
	if (target === guess) break;
	console.log(`Target: ${target} Guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log('Congratulations you guessed it!');

/*
===================================
for ... of
===================================
- Easier way to iterate over arrays (or other iterable objects)
*/

// Syntax:
for ([ variable ] of [ iterable ]) {
	[ statement ];
}

// Example 1: Regular "for" method
let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];

for (let i = 0; i < subreddits.length; i++) {
	console.log(subreddits[i]);
}

// Example 1.1: for ... of method
let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];

for (let sub of subreddits) {
	console.log(sub);
}
// soccer
// popheads
// cringe
// books

// Example 2: Iterating over a string
for (let char of 'cockadoodledoo') {
	console.log(char.toUpperCase());
}
// C
// O
// C
// K
// A ... O

/*
===================================
Comparing for and for ... of
===================================
*/

// Example 1: To sum each row to verify they equal 15
// Regular for loop
const magicSquare = [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ];

for (let i = 0; i < magicSquare.length; i++) {
	let row = magicSquare[i];
	let sum = 0;
	for (let j = 0; j < row.length; j++) {
		sum += row[j];
	}
	console.log(`${row} summed to ${sum}`);
}
// 2,7,6 summed to 15
// 9,5,1 summed to 15
// 4,3,8 summed to 15

// Example 1.1: To sum each row to verify they equal 15
// for ... of loop (much more efficient method)
const magicSquare = [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ];

for (let row of magicSquare) {
	let sum = 0;
	for (let num of row) {
		sum += num;
	}
	console.log(`${row} summed to ${sum}`);
}
// 2,7,6 summed to 15
// 9,5,1 summed to 15
// 4,3,8 summed to 15

// Example 2: When to use a traditional for loop
const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (let i = 0; i < words1.length; i++) {
	console.log(words1[i], words2[i]);
	// or
	console.log(`${words1[i]}${words2[i]}`);
}
// mail box
// mailbox
// milk shake
// milkshake ... etc

/*
===================================
Looping Over Objects
===================================
- Also known as iterating over objects
- ** Objects are not iterable **
*/

// Example 1:
const movieReviews = {
	Arrival                : 9.5,
	Alien                  : 9,
	Amelie                 : 8,
	'In Bruges'            : 9,
	Amadeus                : 10,
	'Kill Bill'            : 8,
	'Little Miss Sunshine' : 8.5,
	Coraline               : 7.5
};

console.log(Object.keys(movieReviews));
// Array(8) [ "Arrival", "Alien", "Amelie", "In Bruges", "Amadeus", "Kill Bill", "Little Miss Sunshine", "Coraline" ]

console.log(Object.values(movieReviews));
// Array(8) [ 9.5, 9, 8, 9, 10, 8, 8.5, 7.5 ]

// Example 2: for ... of Method
const movieReviews = {
	Arrival                : 9.5,
	Alien                  : 9,
	Amelie                 : 8,
	'In Bruges'            : 9,
	Amadeus                : 10,
	'Kill Bill'            : 8,
	'Little Miss Sunshine' : 8.5,
	Coraline               : 7.5
};

for (let movieKeys of Object.keys(movieReviews)) {
	console.log(movieKeys);
}
// Arrival
// Alien
// Amelie
// In Bruges ... etc

// Example 2.1: Fetching the values
for (let movieValues of Object.values(movieReviews)) {
	console.log(movieValues);
}
// 9.5
// 9
// 8
// 9 ... etc

// Example 2.2: Fetching the key and values
for (let movie of Object.keys(movieReviews)) {
	console.log(movie, movieReviews[movie]);
}
// Arrival 9.5
// Alien 9
// Amelie 8
// In Bruges 9 ... etc

// Example 3: Finding the average user review score
const movieReviews = {
	Arrival                : 9.5,
	Alien                  : 9,
	Amelie                 : 8,
	'In Bruges'            : 9,
	Amadeus                : 10,
	'Kill Bill'            : 8,
	'Little Miss Sunshine' : 8.5,
	Coraline               : 7.5
};

const ratings = Object.values(movieReviews);
let total = 0;

for (let r of ratings) {
	total += r;
}
let avg = total / ratings.length;
console.log(avg); // 8.6875

/*
===================================
for ... in
===================================
- Looping over the keys in an object
*/

// Syntax:
for (variable in object) {
	statement;
}

// Example 1:
const jeopardyWinnings = {
	regularPlay           : 2522700,
	watsonChallenge       : 300000,
	tournamentOfChampions : 500000,
	battleOfTheDecades    : 100000
};

for (let prop in jeopardyWinnings) {
	console.log(prop); // Returns the keys
	console.log(jeopardyWinnings[prop]); // Returns the values
}
// regularPlay
// 2522700
// watsonChallenge
// 3000000
// tournamentOfChampions
// 5000000
// battleOfTheDecades
// 100000

// Example 1.1: Sum all earnings
let total = 0;
for (let prop in jeopardyWinnings) {
	total += jeopardyWinnings[prop];
}

let avg = total / jeopardyWinnings.length;
console.log(`Ken Jennings Total Earnings: ${total}`);
console.log(avg);
// Ken Jennings Total Earnings: 3422700
