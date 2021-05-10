/*
JavaScript Notes and Documentation
Async & Await
*/

/**
====================================
Async & Await:
*/

/*
Async:
	* async functions are a nice, clean and easy syntax for working with promises.
  * Async functions always return a promise.
	* If the function returns a value, the promise will be resolved with that value.
	* If the function throws an exception, the promise will be rejected.
*/

// Syntax:
async function hello() {
	return "Hey guys!";
}
hello();
// -> Promise { <state>: "fulfilled", <value>: "Hey guys!" }

async function uhOh() {
	throw new Error("Oh no!");
}
uhOh();
// -> Promise { <state>: "rejected", <reason>: Error }

// ** When we put an async in front of a function it's now going to behave differently. It will now return a Promise. So even though we don't write "new Promise" or explicitly say to return a Promise, it does.

// Example 1: Difference between a standard function and an async function
function greet() {
	return "Hello!";
}
greet(); // -> Hello!

async function greet() {
	return "Hello!";
}
greet(); // -> Promise { <state>: "fulfilled", <value>: "Hello!" }

// Example 2: returning a Promise that is not resolved
async function add(x, y) {
	// check if "x" and "y" are numbers
	if (typeof x !== "number" || typeof y !== "number") {
		throw "X and Y must both be numbers!";
	}
	return x + y;
}

add("e", "r")
	.then((val) => {
		console.log("Promise resolved with: ", val);
	})
	.catch((err) => {
		console.log("Promise rejected with: ", err);
	});
// -> Promise rejected with: X and Y must both be numbers!

// ** Re-writing the above async function as a standard Promise
function add(x, y) {
	return new Promise((resolve, reject) => {
		if (typeof x !== "number" || typeof y !== "number") {
			reject("X and Y must both be numbers!");
		}
		resolve(x + y);
	});
}

add(5, "r")
	.then((val) => {
		console.log("Promise resolved with: ", val);
	})
	.catch((err) => {
		console.log("Promise rejected with: ", err);
	});
// -> Promise rejected with: X and Y must both be numbers!

// ** In short, an async function is just a short cut syntax to make a function that returns a Promise.

/*
Await:
	* We can only use the await keyword inside of functions declared with async.
  * Await will pause the execution of the function, waiting for a Promise to be resolved.
*/
