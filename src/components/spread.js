/*
JavaScript Notes and Documentation
Spread:
*/

/*
==========================================
Spread
==========================================
- (...) allows an iterable such as an array expression or string to be EXPANDED in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

- The syntax is always 3 dots (...) but they mean something different depending on where you use them.

- The 3 use cases for spread: 
  * spread in a Function Call 
  * spread in Array Literals
  * spread in Object Literals
*/

/*
Spread in a Function Call

- Expands an iterable (array, string, etc.) into a list of arguments
*/
const nums = [ 9, 3, 2, 8 ];
Math.max(nums); // -> NaN
Math.max(...nums); // -> 9 (this is the same as calling: Math.max(9, 3, 2, 8))

// Example 1:
function giveMeFour(a, b, c, d) {
	console.log('a:', a);
	console.log('b:', b);
	console.log('c:', c);
	console.log('d:', d);
}
const colors = [ 'red', 'orange', 'yellow', 'green' ];
// without spread
giveMeFour(colors);
// -> a: [ 'red', 'orange', 'yellow', 'green' ]
// -> b: undefined
// -> c: undefined
// -> d: undefined

// with spread
giveMeFour(...colors);
// -> a: red
// -> b: orange
// -> c: yellow
// -> d: green

// spread with a string
const str = 'GOAT';
giveMeFour(...str);
// -> a: G
// -> b: O
// -> c: A
// -> d: T

/*
Spread in Array Literals

- Create a new array using an existing array. Spreads the elements from one array into a new array.
- We can use this to combine arrays, make copies of arrays, etc.
*/
const nums1 = [ 1, 2, 3 ];
const nums2 = [ 4, 5, 6 ];

[ ...nums1, ...nums2 ];
// -> [ 1, 2, 3, 4, 5, 6 ]
[ 'a', 'b', ...nums2 ];
// -> [ "a", "b", 4, 5, 6 ]
[ ...nums1, ...nums2, 7, 8, 9 ];
// -> [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Example 1:
const cephalopods = [
	'dumbo octopus',
	'humboldt squid',
	'flamboyant cuttlefish'
];

const gastropods = [
	'giant african snail',
	'banana slug',
	'variable neon slug'
];

// combine cephalopods and gastropods into one array
const mollusca = [ ...cephalopods, ...gastropods ];
// ** same result using .concat() **
const mollusca = cephalopods.concat(gastropods);

// making a copy of an array (very common method to copy an array is to use spread)
const cephCopy = [ ...cephalopods ];

// other types of data can also be spread into an array like a string
const alpha = 'abcdefghijklmnopqrstuvwxyz';
// .split() method
const splitAlpha = alpha.split('');
// -> [ "a", "b", "c", "d", … ]
// spread method
const spreadAlpha = [ ...alpha ];
// -> [ "a", "b", "c", "d", … ]

/*
Spread in Object Literals

- Copies properties from one object into another object literal.
*/
const feline = {
	legs   : 4,
	family : 'Felidae'
};
const canine = {
	family : 'Caninae',
	furry  : true
};

const dog = {
	...canine,
	isPet : true
};
// -> { family: 'Felidae', furry: true, isPet: true }
const houseCat = {
	...feline,
	isGrumpy    : true,
	personality : 'unpredictable'
};
// -> { legs: 4, family: 'Felidae', isGrumppy: true, personality: 'unpredictable' }

// to copy out an object
const houseCatClone = {
	...houseCat
};

/*
==========================================
The Arguments Object
==========================================
- Available inside every function.
- It's an array-like object
	* Has a length property
	* Does not have array methods like push/pop
- Contains all the arguments passed to the function
- Not available inside of arrow functions
*/

// old method to sum all numbers
function sumAll() {
	let total = 0;
	for (let i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}
sumAll(8, 4, 6, 3, 4); // -> 25
sumAll(2, 3); // -> 5

// reduce method
function sumAll() {
	// for this method we must turn arguments into an array if we want to use array methods, like .reduce()
	const argsArr = [ ...arguments ];
	return argsArr.reduce((total, currVal) => {
		return total + currVal;
	});
}
sumAll(2, 2, 2); // -> 6
