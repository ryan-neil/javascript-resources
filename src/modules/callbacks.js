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
// -> 40, 42, 44, 46, etc...
numbers.forEach(printTriple);
// -> 60, 63, 66, 69, etc...

// Example 2: Print out each book title
const books = [
	{
		title   : 'Good Omens',
		authors : [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating  : 4.25
	},
	{
		title   : 'Bone: The Complete Edition',
		authors : [ 'Jeff Smith' ],
		rating  : 4.42
	},
	{
		title   : 'American Gods',
		authors : [ 'Neil Gaiman' ],
		rating  : 4.11
	},
	{
		title   : 'A Gentlemen in Moscow',
		authors : [ 'Amor Towles' ],
		rating  : 4.36
	}
];

// All these methods produce the same output:
// forEach (easiest looping method)
books.forEach(function(book) {
	console.log(book.title.toUpperCase());
});

// for of
for (let book of books) {
	console.log(book.title.toUpperCase());
}

// regular for loop
for (let i = 0; i < books.length; i++) {
	console.log(books[i].title.toUpperCase());
}
// -> GOOD OMENS
// -> BONE: THE COMPLETE EDITION
// -> AMERICAN GODS
// -> A GENTLEMEN IN MOSCOW

// Example 3: When we need to print the index and the number in the array. There isn't an easy way to get the index with a "for .. of" loop so we use "forEach".
const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];

numbers.forEach(function(num, idx) {
	console.log(idx, num);
});
// -> 0 20
// -> 1 21
// -> 2 22
// -> 3 23 ... etc.

/*
map

- Creates a new array with the results of calling a callback on every element in the array.
- It accepts a callback just like "forEach" and it calls that callback with every element in the array but it builds a new array with those values.
- A very, very common array method.
- forEach is like half of map. forEach only loops through the elements, whereas map loops through and saves them into a new array.
*/

// Example 1:
const texts = [ 'rofl', 'lol', 'omg', 'ttyl' ];
const caps = texts.map(function(t) {
	return t.toUpperCase();
});
texts; // -> ['rofl', 'lol', 'omg', 'ttyl']
caps; // -> ['ROFL', 'LOL', 'OMG', 'TTYL']

// Example 2:
const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];

const doubles = numbers.map(function(num) {
	return num * 2;
});

// Example 3: Decide if the num in numbers is even or odd. Map them into a new array where the array will contain an object for each element.
const numDetail = numbers.map(function(n) {
	return {
		value  : n,
		isEven : n % 2 === 0
	};
});
console.log(numDetail);
// -> 0: Object { value: 20, isEven: true }
// -> 1: Object { value: 21, isEven: false }
// -> 2: Object { value: 22, isEven: true }
// -> 3: Object { value: 23, isEven: false } ... etc.

// Example 4: Reformat the array to where all the strings are capitalize and each letter in the string is separated by a period.
const words = [ 'asap', 'byob', 'rsvp', 'diy' ];

const reformWords = words.map(function(word) {
	return word.toUpperCase().split('').join('.');
});
console.log(reformWords);
// [ "A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y" ]

// Example 4 Breakdown:
// we start by capturing the new mapped string with "reformWords"
const words = [ 'asap', 'byob', 'rsvp', 'diy' ];
const reformWords = words.map(function(word) {
	// next we need to return our value of the combined methods.
	return (word
			// we start with setting all the words to uppercase. ["ASAP", "BYOB", etc.]
			.toUpperCase()
			// then we split the the words with an empty string. this gives us spaces between the letters. ["A" "S" "A" "P", "B" "Y" "O" "B", etc.]
			.split('')
			// last we join the letters back up but add a period between those letters ["A.S.A.P", "B.Y.O.B", etc.]
			.join('.') );
});
console.log(reformWords);

// Example 5: Create a new array with only the objects book titles.
const books = [
	{
		title   : 'Good Omens',
		authors : [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating  : 4.25
	},
	{
		title   : 'Bone: The Complete Edition',
		authors : [ 'Jeff Smith' ],
		rating  : 4.42
	},
	{
		title   : 'American Gods',
		authors : [ 'Neil Gaiman' ],
		rating  : 4.11
	},
	{
		title   : 'A Gentlemen in Moscow',
		authors : [ 'Amor Towles' ],
		rating  : 4.36
	}
];

const bookTitles = books.map(function(book) {
	return book.title;
});
console.log(bookTitles);
// [ "Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentlemen in Moscow" ]

/*
find

- Returns the value of the first element in the array that satisfies the provided testing function.
*/

let movies = [
	'The Fantastic Mr. Fox',
	'Mr. and Mrs. Smith',
	'Mrs. Doubtfire',
	'Mr. Deeds'
];
let movieWithMr = movies.find(m1 => {
	return m1.includes('Mr.');
});
console.log(movieWithMr); // -> The Fantastic Mr. Fox

let movieWithMrs = movies.find(m2 => m2.indexOf('Mrs.') === 0);
console.log(movieWithMrs); // -> Mrs. Doubtfire

// Example 1:
const books = [
	{
		title   : 'Good Omens',
		authors : [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating  : 4.25
	},
	{
		title   : 'Bone: The Complete Edition',
		authors : [ 'Jeff Smith' ],
		rating  : 4.42
	},
	{
		title   : 'A Gentlemen in Moscow',
		authors : [ 'Amor Towles' ],
		rating  : 4.36
	}
];
// find the first book with a rating greater than 4.3
const goodBooks = books.find(b => {
	return b.rating >= 4.3;
});
console.log(goodBooks.title); // -> Bone: The Complete Edition

// find the book with the author "Neil Gaiman"
const neilGBook = books.find(b => {
	return b.authors.includes('Neil Gaiman');
});
console.log(neilGBook.title); // -> Good Omens

/*
filter

- Filter allows us to filter out subsets of an array.
- Filter also creates a new array with all elements that pass the test implemented by the provided function.

- We can use filter to search for things and narrow down the results that we are showing.
- An example may be an e-commerce book store where we can search for a book based on its title. Or if we want to narrow down search results. 
- User could check a box that has a 4 star or greater rating or only fantasy books.
*/
const nums = [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
const evens = nums.filter(arrayNumber => {
	// there is no remainder when we divide by 2
	return arrayNumber % 2 === 0;
});
const odds = nums.filter(arrayNumber => {
	// the remainder is equal to 1 when we divide by 2
	return arrayNumber % 2 === 1;
});
const bigNums = nums.filter(arrayNumber => {
	return arrayNumber > 5;
});
console.log(odds); // -> [ 9, 7, 5, 3, 1 ];
console.log(evens); // -> [ 8, 6, 4, 2 ];
console.log(bigNums); // -> [ 9, 8, 7, 6 ];

// Example 1: Book library
const books = [
	{
		title   : 'Good Omens',
		authors : [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating  : 4.25,
		genres  : [ 'fiction', 'fantasy' ]
	},
	{
		title   : 'Changing My Mind',
		authors : [ 'Zadie Smith' ],
		rating  : 3.83,
		genres  : [ 'nonfiction', 'essays' ]
	},
	{
		title   : 'Bone: The Complete Edition',
		authors : [ 'Jeff Smith' ],
		rating  : 4.42,
		genres  : [ 'fiction', 'graphic novel', 'fantasy' ]
	},
	{
		title   : 'American Gods',
		authors : [ 'Neil Gaiman' ],
		rating  : 4.11,
		genres  : [ 'fiction', 'fantasy' ]
	},
	{
		title   : 'A Gentleman in Moscow',
		authors : [ 'Amor Towles' ],
		rating  : 4.36,
		genres  : [ 'fiction', 'historical fiction' ]
	},
	{
		title   : 'The Name of the Wind',
		authors : [ 'Patrick Rothfuss' ],
		rating  : 4.54,
		genres  : [ 'fiction', 'fantasy' ]
	},
	{
		title   : 'The Overstory',
		authors : [ 'Richard Powers' ],
		rating  : 4.19,
		genres  : [ 'fiction', 'short stories' ]
	},
	{
		title   : 'The Way of Kings',
		authors : [ 'Brandon Sanderson' ],
		rating  : 4.65,
		genres  : [ 'fantasy', 'epic' ]
	},
	{
		title   : 'Lord of the flies',
		authors : [ 'William Golding' ],
		rating  : 3.67,
		genres  : [ 'fiction' ]
	}
];
// Select the books that have the highest ratings:
const highestRating = books.filter(book => book.rating > 4.3);

// Select only fantasy books:
const fantasyBooks = books.filter(book => book.genres.includes('fantasy'));

// Select short story books:
const shortForm = books.filter(
	book =>
		book.genres.includes('short stories') ||
		book.genres.includes('essays')
);

// Search for books that contain "the" in their title:
// to mimic a search box we create an empty variable called "query"
const query = '';
const results = books.filter(book => {
	// this removes all casing
	const title = book.title.toLowerCase();
	// we return the book title of the query search and set the query word to lowercase
	return title.includes(query.toLowerCase());
});

/*
Every

- "Every" Tests whether all elements in the array pass the provided function. It returns a Boolean value.
- "Every" accepts a callback which itself needs to be a boolean.
- The function has to return "true" for every element in the parameter for "every" to return "true".

Some

- Similar to "every", but returns true if ANY of the array elements pass the test function.
*/

// Example 1: "every"
const words = [ 'dog', 'dig', 'log', 'bag', 'wag' ];
// if all the words end with the letter "g"
const endsWithG = words.every(word => {
	const lastLetter = word.length - 1;
	return word[lastLetter] === 'g';
});
console.log(endsWithG); // -> true

// Example 1: Breakdown
const endsWithG = words.every(word => {
	console.log(word.length); // -> 3
	// this gets us the last index of the word in the array because .length gives us one more than the total index.
	const lastLetter = word.length - 1; // -> 2
	// this says, is word of index [2] equal to the letter 'g'?
	return word[lastLetter] === 'g'; // -> true
});

// Example 2: "some"
const words = [ 'dog', 'dig', 'log', 'bag', 'wag' ];
// Checking is some of the words start with the letter "d"
const someStartWithD = words.some(word => {
	return word[0] === 'd';
});
console.log(someStartWithD); // -> true

/*
Sort

- Sort is one of the few callback array methods that mutates the array in place.

Syntax:
arr.sort(compareFunc(a, b));
- If compareFunc(a, b) returns less than 0
	- Sort a before b
- If compareFunc(a, b) returns greater than 0
	- Sort b before a
- If compareFunc(a, b) returns 0
	- Leave a and b unchanged with respect to each other
*/

// Example 1:
const prices = [ 400.5, 3000, 99.99, 35.99, 12.0, 9500 ];

// the standard sort (sorting smallest to largest)
const ascendingSort = prices.sort((a, b) => a - b); // -> [ 12, 35.99, 99.99, 400.5, 3000, 9500 ]

// the standard sort (sorting largest to smallest)
const decendingSort = prices.sort((a, b) => b - a); // -> [ 9500, 3000, 400.5, 99.99, 35.99, 12 ]

// Example 1: Largest to Smallest Breakdown
// in this example a = 400.5 and b = 3000 so we have 3000 - 400.5 this returns a positive number so we sort b before a or moving the larger numbers to the left side of the array.
// ** This will also change the "prices" array **
const ascendingSort = prices.sort((a, b) => b - a); // -> [ 9500, 3000, 400.5, 99.99, 35.99, 12 ]

// Example 2:
const books = [
	{
		title   : 'Good Omens',
		authors : [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating  : 4.25,
		genres  : [ 'fiction', 'fantasy' ]
	},
	{
		title   : 'Changing My Mind',
		authors : [ 'Zadie Smith' ],
		rating  : 3.83,
		genres  : [ 'nonfiction', 'essays' ]
	},
	{
		title   : 'Bone: The Complete Edition',
		authors : [ 'Jeff Smith' ],
		rating  : 4.42,
		genres  : [ 'fiction', 'graphic novel', 'fantasy' ]
	},
	{
		title   : 'American Gods',
		authors : [ 'Neil Gaiman' ],
		rating  : 4.11,
		genres  : [ 'fiction', 'fantasy' ]
	},
	{
		title   : 'A Gentleman in Moscow',
		authors : [ 'Amor Towles' ],
		rating  : 4.36,
		genres  : [ 'fiction', 'historical fiction' ]
	},
	{
		title   : 'The Name of the Wind',
		authors : [ 'Patrick Rothfuss' ],
		rating  : 4.54,
		genres  : [ 'fiction', 'fantasy' ]
	},
	{
		title   : 'The Overstory',
		authors : [ 'Richard Powers' ],
		rating  : 4.19,
		genres  : [ 'fiction', 'short stories' ]
	},
	{
		title   : 'The Way of Kings',
		authors : [ 'Brandon Sanderson' ],
		rating  : 4.65,
		genres  : [ 'fantasy', 'epic' ]
	},
	{
		title   : 'Lord of the flies',
		authors : [ 'William Golding' ],
		rating  : 3.67,
		genres  : [ 'fiction' ]
	}
];
// sort by rating
// * we can't sort by just "a" and "b" because they're both "objects".
books.sort((a, b) => a.rating - b.ratings); // -> this returns lowest rating book object or "element" first.

/*
Reduce

- Executes a reducer function on each element of the array, resulting in a single value.
- We're taking a bunch of values and reducing them down to a single value.
- It could be tallying votes or tallying data in an array.
*/

// Example 1: Summing an array
[ 3, 5, 7, 9, 11 ].reduce((accumulator, currentValue) => {
	return accumulator + currentValue; // -> 35
});

// Breakdown of how "reduce" works under the hood:
// first call -> 3 + 5 = 8
// second call -> 8 + 7 = 15
// third call -> 15 + 9 = 24
// fourth call -> 24 + 11 = 35

// Example 2: Multiply all numbers together
const nums = [ 3, 4, 5, 6, 7 ];

const multiplyAll = nums.reduce((total, currentVal) => {
	return total * currentVal; // -> 2520
});

// Example 2: Finding the highest grade
const grades = [ 87, 64, 96, 92, 88, 99, 73, 70, 64 ];

const highestGrade = grades.reduce((max, currVal) => {
	if (currVal < max) return currVal;
	return max; // -> 99
});

// Breakdown:			max		currVal		return
// first call -> 	87		64				87
// second call -> 87		96				96
// third call -> 	96		92				96 ... etc.

// Example 2.1: We can re-write the above block with the built in "Math.max" function
const grades = [ 87, 64, 96, 92, 88, 99, 73, 70, 64 ];

const highestGrade = grades.reduce((max, currVal) => {
	return Math.max(max, currVal); // -> 99
});
const lowestGrade = grades.reduce((min, currVal) => {
	return Math.min(min, currVal); // -> 64
});

/*
Reduce continued...
*/

// Example 1: Tallying Logic/Breakdown
const votes = [ 'y', 'y', 'n', 'y', 'n', 'y', 'y', 'n' ];
const results = votes.reduce((tally, val) => {
	// if the tally value ("y" or "n") is already in there we increment by 1.
	if (tally[val]) {
		tally[val]++;
		// if the tally value ("y" or "n") has not been seen yet we set it to "1".
	} else {
		tally[val] = 1;
	}
	return tally; // -> { y: 5, n: 3 }
}, {});

// Breakdown:				tally				val			return
// first call -> 		-						'y'			{ }
// second call -> 	{y:1}				'y'			{y:2}
// third call -> 		{y:2}				'n'			{y:2, n:1}
// fourth call -> 	{y:2, n:1}	'y'			{y:3, n:1}

// Example 1.1: Tallying Shorthand
const votes = [ 'y', 'y', 'n', 'y', 'n', 'y', 'y', 'n' ];

const results = votes.reduce((tally, vote) => {
	tally[vote] = (tally[vote] || 0) + 1;
	return tally;
}, {});
console.log(results); // -> { y: 5, n: 3 }

// Example 2: Grouping Books by Rating
const books = [
	{
		title   : 'Good Omens',
		authors : [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating  : 4.25,
		genres  : [ 'fiction', 'fantasy' ]
	},
	{
		title   : 'Changing My Mind',
		authors : [ 'Zadie Smith' ],
		rating  : 3.83,
		genres  : [ 'nonfiction', 'essays' ]
	},
	{
		title   : 'Bone: The Complete Edition',
		authors : [ 'Jeff Smith' ],
		rating  : 4.42,
		genres  : [ 'fiction', 'graphic novel', 'fantasy' ]
	},
	{
		title   : 'American Gods',
		authors : [ 'Neil Gaiman' ],
		rating  : 4.11,
		genres  : [ 'fiction', 'fantasy' ]
	},
	{
		title   : 'A Gentleman in Moscow',
		authors : [ 'Amor Towles' ],
		rating  : 4.36,
		genres  : [ 'fiction', 'historical fiction' ]
	},
	{
		title   : 'The Name of the Wind',
		authors : [ 'Patrick Rothfuss' ],
		rating  : 4.54,
		genres  : [ 'fiction', 'fantasy' ]
	},
	{
		title   : 'The Overstory',
		authors : [ 'Richard Powers' ],
		rating  : 4.19,
		genres  : [ 'fiction', 'short stories' ]
	},
	{
		title   : 'A Truly Horrible Book',
		authors : [ 'Xavier Time' ],
		rating  : 2.18,
		genres  : [ 'fiction', 'trash' ]
	},
	{
		title   : 'The Way of Kings',
		authors : [ 'Brandon Sanderson' ],
		rating  : 4.65,
		genres  : [ 'fantasy', 'epic' ]
	},
	{
		title   : 'Lord of the flies',
		authors : [ 'William Golding' ],
		rating  : 3.67,
		genres  : [ 'fiction' ]
	}
];

const groupedByRating = books.reduce((groupedBooks, book) => {
	const key = Math.floor(book.rating);
	if (!groupedBooks[key]) groupedBooks[key] = [];
	groupedBooks[key].push(book);
	return groupedBooks;
}, {});
console.log(groupedByRating);

// Example 2 Logic/Breakdown
const groupedByRating = books.reduce((groupedBooks, book) => {
	// we remove the decimal of the book rating
	const key = Math.floor(book.rating);
	// we then check if there is a key in "groupedBooks"
	// if there isn't a key we set it equal to an empty array
	if (!groupedBooks[key]) groupedBooks[key] = [];
	// we then push the whole book into the array
	groupedBooks[key].push(book);

	return groupedBooks;
}, {});
console.log(groupedByRating);
