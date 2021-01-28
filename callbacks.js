/*
JavaScript Notes and Documentation
Callbacks:
*/

/*
==========================================
Callback Functions
==========================================
- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.
- Callbacks are extremely common in JavaScript!!!
*/

function callTwice(func) {
	func();
	func();
}

function laugh() {
	console.log('Hahaha');
}
callTwice(laugh); // "laugh" is the callback function here

// Example 1: setTimeout()
// If we don't need to re-use the function we can call an in-line "anonymous" function here. This is a very common practice.
setTimeout(function() {
	alert('Hello There!');
}, 3000);
// this is saying after 3000 milliseconds (3s) run the chunk of code nested inside the anonymous function.

/*
==========================================
Array Callback Methods
==========================================
- Arrays out of the box come with tons of built-in methods that accept callback functions.
*/
/**/

/*
forEach

- Takes any function you give it and it calls it on each element in the array.
*/

// Example 1:
const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];

// The parameter here will represent one element at a time (20, 21, 22, etc.). The first time this runs it will pass in "20" for "num" (num = 20).
numbers.forEach(function(num) {
	console.log(num);
}); // -> 20, 21, 22, 23, etc...

// Example 1.1: Passing functions into functions
const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];

function printDouble(n2) {
	console.log(n2 * 2);
}

function printTriple(n3) {
	console.log(n3 * 3);
}

numbers.forEach(printDouble);
// 40, 42, 44, 46, etc...

numbers.forEach(printTriple);
// 60, 63, 66, 69, etc...
