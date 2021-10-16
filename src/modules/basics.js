/*
JavaScript Notes and Documentation
The Basics:
*/

/*
=========================================
let vs. const
=========================================
- let allows you to change the variable.
- const DOES NOT allow you to change the variable.
*/

// Examples of when you would use let:
let counter = 1;
let counter = counter + 1; // 2
counter += 1; // 2
counter++; // 2

// Examples of when you would use const:
const pi = 3.14159;
const daysInWeek = 7;

/*
=========================================
Strings
=========================================
*/

let firstName = 'Ryan';
let lastName = 'Neil';
firstName + lastName; // "RyanNeil"
firstName + ' ' + lastName; // "Ryan Neil"

// Strings are indexed:
// Every character in a string is assigned a number based on its position in the string.
let animal = 'chicken';
animal[0]; // "c"
animal[1]; // "h"
animal[2]; // "i"
animal[3]; // "c"
animal[4]; // "k" etc...

/*
=========================================
Strings Properties
=========================================
- String Properties are values we can access. The parenthesis are crucial to string methods.
*/

let msg = 'Hello!';
// * length:
msg.length; // 6
// * toUpperCase:
msg.toUpperCase(); // HELLO!
// * toLowerCase:
msg.toLowerCase(); // hello!

let greeting = '   leave me alone please   ';
// * trim:
greeting.trim(); // 'leave me alone please'

// Strings can also be chained on to each other:
let color = '    purple  ';
// * trim and toUpperCase chained:
color.trim().toUpperCase(); // "PURPLE"

// Some methods can accept arguments that modify their behavior. These arguments are passed inside the parenthesis.
thing.method(arg);

// Common methods:
// * indexOf:
let tvShow = 'catdog';
tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog'); // 3
tvShow.indexOf('z'); // -1 (not found)

// * slice:
let movieType = 'superhero';
// movieType.slice([which index to start the slice at], [where to stop the slice])
movieType.slice(0, 5); // 'super'
movieType.slice(5); // 'hero'
let cost = '$50.60';
cost.slice(1); // "50.60"

// * replace:
let msg = 'baseball is entertaining';
// msg.replace([the word to be replaced], [the replacing word])
msg.replace('entertaining', 'boring'); // "baseball is boring"

/*
=========================================
String Template Literals
=========================================
- Template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string. For template literals we use back ticks not single quotes.
*/

`I counted ${3 + 4} sheep`; // "I counted 7 sheep"

let username = 'Ziggy31';
`Welcome back, ${username}`; // "Welcome back, Ziggy31"
`GAME OVER ${username.toUpperCase()}`; // "GAME OVER ZIGGY31"

let item = 'cucumbers';
let price = 1.99;
let quantity = 4;
`You bought ${quantity} ${item}, total price: $${price *
	quantity}`; // "You bought 4 cucumbers, total price: $7.96"

const minAge = 21;
let yourAge = 19;
`You must be ${minAge} or older to enter. Come back in ${minAge -
	yourAge} years.`; // You must be 21 or older to enter. Come back in 2 years.

/*
=========================================
Null and Undefined
=========================================
- Null: "Intentional absence of any value". Must be assigned.
- Undefined: Variables that do not have an assigned value are undefined.
*/

/*
=========================================
Math Object
=========================================
- Contains properties and methods for mathematical constants and functions.
*/

// Value of pi:
Math.PI; // 3.141592653589793
// Rounding a number:
Math.round(4.9); // 5
// Absolute value:
Math.abs(-456); // 456
// Raises 2 to the 5th power:
Math.pow(2, 5); // 35
// Removes decimal:
Math.floor(3.999); // 3

// Random Numbers
// Math.random() gives us a random decimal between 0 and 1 (non-inclusive)
Math.random(); // 0.3909038834734563
Math.random(); // 0.8165536795157997 etc.

// Random Integers
// Math.random times 10 gives us a random decimal number up to 9.999...
Math.random() * 10; // 2.373859877092636
Math.random() * 10; // 4.467900649576393
Math.random() * 10; // 9.245014588722578 etc.
// Math.floor removes the decimal point. And gives us a number from 0 to 9.
Math.floor(Math.random() * 10); // 0
Math.floor(Math.random() * 10); // 5
Math.floor(Math.random() * 10); // 8 etc.
// Adding +1 to Math.floor(Math.random() * 10) gives us a number from 0 to 10.
Math.floor(Math.random() * 10) + 1; // 7
Math.floor(Math.random() * 10) + 1; // 3
Math.floor(Math.random() * 10) + 1; // 10 etc.

/*
=========================================
typeof Operator
=========================================
- typeof is an "operator", similar to the + sign. This is why we don't need parenthesis.
*/

typeof 99; // "number"
typeof 'Name'; // "string"
typeof true; // "boolean"

const mystery = '99 Balloons';
typeof mystery; // "string"

/*
=========================================
parse Strings
=========================================
- Used for when you have a string that needs to be changed into a number.
- parseInt (removes decimals).
*/

parseInt('24'); // 24
parseInt('24.987'); // 24
parseInt('28dayslater'); // 28
// parseFloat (keeps decimals)
parseFloat('24.987'); // 24.987
parseFloat('7'); // 7
parseFloat('i ate 3 shrimp'); // NaN

/*
=========================================
Boolean Logic
=========================================
- ** Operators **
- > greater than
- < less than
- >= greater than or equal to
- <= less than or equal to
- == equality
- != not equal
- === strict equality
- !== strict non-equality
*/

/*
Equality (== vs ===)
*/
// == (double equals):
// Checks for equality of value, but not equality of type.
5 == 5; // true
'b' == 'c'; // false
7 == '7'; // true
0 == ''; // true
true == false; // false
0 == false; // true

// === (triple equals):
// Checks for equality of value AND type. More precise and more strict. Generally this is what we want (99.9% of the time). The same goes for non-equality (!==).
5 === 5; // true
1 === 2; // false
2 === '2'; // false
false === 0; // false

/*
=========================================
Conditional Statements (if, else if, else)
=========================================
- Conditional Statements are used for making decisions with code. They can have 3 different pieces, an "if", an "else if", and "else".
*/

// ** if = Run the code "if" a given condition is true. **

// Example 1
let rating = 3;

if (rating === 3) {
	console.log('You are a superstar!'); // 'You are a superstar!'
}
// Example 2: How to tell if a number is odd
let num = 37;

if (num % 2 !== 0) {
	console.log('Odd number'); // 'Odd number'
}

// ** else if = if not the first thing, maybe this other thing?? **

// Example 1: Performance Review
// 3 - You are a superstar!
// 2 - Meets expectations
// 1 - Needs improvement
let rating = 2;

if (rating === 3) {
	console.log('You are a superstar!');
} else if (rating === 2) {
	console.log('Meets expectations'); // This code block will run since rating = 2.
} else if (rating === 1) {
	console.log('Needs improvement');
}

// ** else = if nothing else was true, run this... **

// Example 1: Performance Review
let rating = -99;

if (rating === 3) {
	console.log('You are a superstar!');
} else if (rating === 2) {
	console.log('Meets expectations');
} else if (rating === 1) {
	console.log('Needs improvement');
} else {
	console.log('Invalid rating'); // This code block will run since rating !== (is not equal) to 3, 2, or 1.
}
// Example 2: Arcade Game
let highScore = 1430;
let userScore = 1280;

if (userScore >= highScore) {
	console.log(
		`Congrats! You have the new high score of ${userScore}!`
	);

	// We then create a new variable with the new high score.
	highScore = userScore;
} else {
	console.log(
		`Good game. Your score of ${userScore} did not beat the high score of ${highScore}.`
	); // This code block runs in this case.
}

/*
=========================================
Nesting Conditional Statements
=========================================
*/

let password = 'catdog';
if (password.length >= 6) {
	if (password.indexOf(' ') !== -1) {
		console.log('Password cannot include spaces');
	} else {
		console.log('Valid password!');
	}
} else {
	console.log('Password too short!');
}

/*
=========================================
Truthy and Falsy Values
=========================================
- All values have an inherent truthy or falsy boolean value.
Falsy Values:
- false
- 0
- "" (empty string)
- null
- undefined
- NaN
Everything else is truthy!
*/

// Example 1:
let mysteryNumber = 5;
if (mysteryNumber) {
	console.log('Truthy'); // This code block will run in this case
} else {
	console.log('Falsy');
}
// Example 1.1:
let mysteryNumber = 0;
if (mysteryNumber) {
	console.log('Truthy');
} else {
	console.log('Falsy'); // This code block will run in this case
}
// Example 2: Making a decision on whether a user is signed in or not.
let loggedInUser = 'Ryan123';
if (loggedInUser) {
	console.log('You are logged in!'); // This code block will run in this case
} else {
	console.log('Please log in!');
}
// Example 2.1:
let loggedInUser = ''; // Here the user has not yet given a user name
if (loggedInUser) {
	console.log('You are logged in!');
} else {
	console.log('Please log in!'); // This code block will run in this case
}

/*
=========================================
Logical Operators
=========================================
- These are used to modify other boolean expressions.
- && -> And
- || -> Or
- ! -> Not
*/

// ** And (&&) **
// Both sides of the && needs to be true for the entire statement to be true.
1 <= 4 && 'a'; // true
9 > 10 && 9 >= 9; // false
'abc'.length === 3 && 1 + 1 === 4; // false

// Example 1: Password Checker
let password = 'taco tuesday';
// This states, if the password is greater than or equal to 6 characters AND does not contain a space, print "Valid password".
if (password.length >= 6 && password.indexOf(' ') === -1) {
	console.log('Valid password!');
} else {
	console.log('Invalid password!'); // This code block will run in this case (Password contains a space)
}
// ** If you need to differentiate between specific breakdowns of error/success messages then we will need to nest the statements. **

// Example 2: Having a user pick a number between 1 and 10
let num = 3;

if (num >= 1 && num <= 10) {
	console.log('Number is between 1 and 10'); // This code block will run in this case
} else {
	console.log('Please guess a number between 1 and 10');
}

// ** Or (||) **
// Only one side of the "pipe" needs to be true for the entire statement to be true.
1 !== 1 || 10 === 10; // true
10 / 2 === 5 || null; // true
0 || undefined; // false

// Example 1: Community theater program
let age = 76;

if (age < 6 || age >= 65) {
	console.log('You get in for free!'); // This code block will run in this case
} else {
	console.log('That will be $10 please');
}

// Example 2: Is the color a shade of purple?
let color = 'lilac';

if (
	color === 'purple' ||
	color === 'lilac' ||
	color === 'violet'
) {
	console.log('Color IS a shade of purple!'); // This code block will run in this case
} else {
	console.log('Color is NOT a shade of purple!');
}

// ** Not (!) **
// Expression returns true if the expression is false.
!null; // true (this is saying, not null)
!(0 === 0); // false (0 = 0 is truthy so not truthy is falsy)
!(3 <= 4); // false (3 IS less than or equal to 4 so not true is false)
!45; // false (45 is truthy so not "true" [45] is falsy)

// Example 1: If there isn't a logged in user on the page
let loggedInUser = '';

// This is if we ONLY want to check if there's not a logged in user
if (!loggedInUser) {
	console.log('Get out of here!');
}
// Example 2: Online snow cone stand with only 2 flavors (grape and cherry)
// first way to solve this:
if (flavor !== 'grape' && flavor !== 'cherry') {
	console.log("We don't have that flavor!");
}
// or an example using not (!):
if (!(flavor === 'grape' || flavor === 'cherry')) {
	console.log("We don't have that flavor!");
}

/*
=====================================
Operator Precedence
=====================================
- ! -> && -> ||
- The order can be altered using ()
*/

let x = 7;
x == 7 || (x === 3 && x > 10); // true (&& holds precedence so that will run first)
// true || false && false
// true || false
// true

// If we want the equation to run from left to right we need to use parenthesis
let x = 7;
(x == 7 || x === 3) && x > 10; // false (the parenthesis runs and then the &&)
// true && false
// false (both sides need to be true for the equation to be true)

/*
=====================================
The Switch Statement
=====================================
*/

// Example 1: Non-switch method
let day = 3;

if (day === 1) {
	console.log('Monday');
} else if (day === 2) {
	console.log('Tuesday');
} else if (day === 3) {
	console.log('Wednesday');
} else if (day === 4) {
	console.log('Thursday');
} else if (day === 5) {
	console.log('Friday');
} else if (day === 6) {
	console.log('Saturday');
} else if (day === 7) {
	console.log('Sunday');
} else {
	console.log('Invalid day');
}
// Example 1.1: Using the Switch method
let day = 2;

switch (day) {
	case 1:
		console.log('Monday');
		break; // this will only print the day it falls on
	case 2:
		console.log('Tuesday');
		break;
	case 3:
		console.log('Wednesday');
		break;
	case 4:
		console.log('Thursday');
		break;
	case 5:
		console.log('Friday');
		break;
	case 6:
		console.log('Saturday');
		break;
	case 7:
		console.log('Sunday');
		break;

	default:
		// this is equivalent to "else"
		console.log('Invalid day');
}

// Example 2: When you have multiple variables that you are checking against one value
let emoji = 'happy face';

switch (emoji) {
	case 'excited face':
	case 'happy face': // 'yellow'
		console.log('yellow');
		break;
	case 'eggplant':
		console.log('purple');
		break;
	case 'heart':
	case 'lips':
		console.log('red');
		break;
}

/*
=====================================
Ternary Operator
=====================================
- Shortcut syntax that we can use for certain conditionals. It basically takes an "if" and an "else" and turns them into a single line of code. This will only work if there are no "else if's" involved.
- condition ? expIfTrue : expIfFalse
*/

// Example 1: Normal "if", "else" solution
let num = 7;

if (num === 7) {
	console.log('Lucky!'); // This code block runs
} else {
	console.log('Unlucky!');
}
// Example 1.1: Ternary operator solution
let num = 2;

num === 7 ? console.log('Lucky!') : console.log('Unlucky!'); // This code block runs

// Example 2: Using the Ternary operator to assign a value to a variable.
// Here we're making a chat app where we can set our status to be online or offline.

// Normal "if", "else" solution
let status = 'offline';
let color = '';

if (status === 'offline') {
	color = 'red'; // This code block runs
} else {
	color = 'green';
}
// Ternary operator solution
let status = 'offline';

let color = status === 'offline' ? 'red' : 'green'; // 'red'
