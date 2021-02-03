/*
JavaScript Notes and Documentation
Arrow Functions:
*/

/*
==========================================
Arrow Functions
==========================================
- "Syntactically compact alternative" to a regular function expression
*/

// Syntax
const square = (x) => {
	return x + x;
};

const sum = (x, y) => {
	return x + y;
};

// ** Parenthesis are optional if there is only one parameter **
const square = (x) => {
	return x * x;
};

// ** Use empty parenthesis for functions with no parameters **
const singASong = () => {
	return 'LA LA LA';
};

// Example 1: is the parameter given even
const isEven = (num) => {
	return num % 2 === 0;
};
console.log(isEven(4)); // true
console.log(isEven(47)); // false

// Example 2: multiply both parameters by each other
const multiply = (x, y) => {
	return x * y;
};
console.log(multiply(4, 5)); // 20

/*
==========================================
Implicit Return
==========================================
*/
// All of these functions do the same thing:
// regular expression
const isEven = function(num) {
	return num % 2 === 0;
};
// arrow function with parens around parameter (if there's only one parameter the parens are optional)
const isEven = (num) => {
	return num % 2 === 0;
};
// implicit return (no return call)
const isEven = (num) => {
	num % 2 === 0;
};
// one-liner implicit return
const isEven = (num) => num % 2 === 0;

// Example 1: Double every number and map it into a new array
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

// normal function syntax
const doubles1 = nums.map(function(n) {
	return n * 2;
});
console.log(doubles1);
// -> [ 2, 4, 6, 8, 10, 12, 14, 16 ]

// arrow function syntax
const doubles2 = nums.map((n) => {
	return n * 2;
});

// implicit arrow function syntax
const doubles3 = nums.map((n) => n * 2);

// Example 2: list if the array items are odd or even
const parityList = nums.map(function(n) {
	if (n % 2 === 0) return 'even';
	return 'odd';
});

const parityList = nums.map((n) => {
	if (n % 2 === 0) return 'even';
	return 'odd';
});
console.log(parityList);
// [ "odd", "even", "odd", "even", "odd", "even", "odd", "even" ]
