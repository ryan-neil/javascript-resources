/*
JavaScript Notes and Documentation
Objects:
*/

/*
=================================
Objects
=================================
* Objects are collections of properties. Properties are a key value pair. Rather than accessing data using an index, we use custom keys.
* An object, compared to an array, is more like a blob that holds different pieces of data. Key and value pairs where there's not necessarily and order to them. It's more about storing pairs of information.
* We do not use a number to access our data out like with an array, we would directly call for the data we need (city, age, zip, etc.)

* Example of Key-Value pairs:
username: --> 'crazyCatLady' (username would be a "key" and "crazyCatLady" would be a value).
upvotes: --> 7 (upvotes would be a "key" and 7 would be a value).
text: --> 'great post!' (text would be a "key" and "great post!" would be a value).
*/

// Example 1: Storing fitness app data
// Object Method
const fitBitData = {
	totalSteps       : 308727,
	totalFloors      : 1814,
	totalMiles       : 211,
	workoutsThisWeek : '5 of 7',
	avgGoodSleep     : '2:13'
};

// Equivalent Array method (Not efficient):
const johnFitBitData = [
	308000, // total steps
	1814, // totals floors
	211, // total miles
	5755 // total calories
];
const lucyFitBitData = [
	290000, // total steps
	1214, // totals floors
	100, // total miles
	2400 // total calories
];

// Equivalent Variable method (Not efficient):
let johnTotalSteps = 308000;
let johnTotalFloors = 1814;
let johnTotalMiles = 211; // etc.

let lucyTotalSteps = 290000;
let lucyTotalFloors = 1214;
let lucyTotalMiles = 100; // etc.

/*
=================================
Object Literals
=================================
*/

// Example 1: Syntax
const fitBitData = {
	totalSteps       : 308727,
	totalFloors      : 1814,
	totalMiles       : 211,
	workoutsThisWeek : '5 of 7',
	avgGoodSleep     : '2:13'
};

// accessing the data using "dot" syntax
fitBitData.totalFloors; // -> 1814
fitBitData.totalMiles; // -> 211

// ** All keys are converted to strings **
// "key" : "value"
// Example 2:
const numbers = {
	100 : 'one hundred',
	16  : 'sixteen'
};

// numbers.100; This is a SyntaxError!!!
// Correct syntax
numbers[100]; // -> "one hundred"

// Example 3: Using a dynamic value (variable) to access data from an object
const palette = {
	red    : '#eb4d4b',
	yellow : '#f9ca24',
	blue   : '#30336b'
};

palette.blue; // -> "#30336b"
palette.red; // -> "#eb4d4b"

let mysteryColor = 'yellow';

// ** when using a variable you MUST use square brackets. "Dot" syntax will not work **
palette[mysteryColor]; // -> "#f9ca24"
palette.mysteryColor; // -> undefined

/*
=================================
Updating and Adding Properties to an Object
=================================
*/

const fitBitData = {
	totalSteps       : 308727,
	totalFloors      : 1814,
	totalMiles       : 211,
	workoutsThisWeek : '5 of 7',
	avgGoodSleep     : '2:13'
};
// Updating properties:
fitBitData.workoutsThisWeek = '6 of 7';
fitBitData.totalMiles += 7.5; // This adds 7.5 to the value of "totalMiles"

// Adding a new property
fitBitData.heartStillBeating = true;

// Example 1: Web app where users can leave reviews
const userReview = {};

// ** We can either use dot notation or square brackets to update and add new properties **
userReview['queenBee49'] = 4.0; // This takes the "queenBee49" key and gives it a value of 4.0
userReview.mrSmith78 = 3.5; // This takes the "mrSmith78" key and gives it a value of 3.5

console.log(userReview); // -> { queenBee49: 4, mrSmith78: 3.5 }

/*
=================================
Nested Arrays and Objects
=================================
*/

// Example Syntax 1: Shopping Cart
const shoppingCart = [
	{
		product  : 'Jenga Classic',
		price    : 6.88,
		quantity : 1
	},
	{
		product  : 'Echo Dot',
		price    : 29.99,
		quantity : 3
	},
	{
		product  : 'Fire Stick',
		price    : 39.99,
		quantity : 2
	}
];

// Example 2: Student Information
const student = {
	firstName : 'David',
	lastName  : 'Jones',
	strengths : [ 'Music', 'Art' ],
	exams     : {
		midterm : 92,
		final   : 88
	}
};
// * Find the average score of exams:
// Step 1: Add an average property to the end of the "exams" object.
student.exams.average = '';

// Step 2: Add midterm and final together and divide by 2. Assign the new average value to "average".
student.exams.average = (student.exams.midterm + student.exams.final) / 2;

console.log(student.exams.average); // -> 90
console.log(student.exams); // -> {midterm: 92, final: 88, average: 90}

// Example 3: Tic-Tac-Toe Game
const game = {
	player1 : {
		username  : 'Ryan',
		playingAs : 'O'
	},
	player2 : {
		username  : 'Katie',
		playingAs : 'X'
	},
	board   : [ [ 'O', null, 'X' ], [ 'X', 'O', 'X' ], [ null, 'O', 'X' ] ]
};

/*
=================================
Objects and Reference Types
=================================
- Object Reference Types work the same exact way as Array Reference Types.
*/

const palette = {
	red    : '#eb4d4b',
	yellow : '#f9ca24',
	blue   : '#30336b'
};

const palette2 = palette;
palette2.green = '#3a8a36'; // This updates "palette" as well as "palette2" with green since we assigned "palette2" = "palette".

console.log(palette2); // -> { red: "#eb4d4b", yellow: "#f9ca24", blue: "#30336b", green: "#3a8a36" }

/*
=================================
Array and Object Equality
=================================
*/

let nums = [ 1, 2, 3 ];
let mystery = [ 1, 2, 3 ];

nums === mystery; // false
// ** This returns false because javascript is storing the reference to the array and not the value inside the array so javascript treats these variables completely different. **

// to get them to equal eachother we would need to do this:
let moreNums = nums;
nums === moreNums; // true

// Example 1: To check if the Arrays contain the same information
const user = {
	username      : 'CherryGarcia8',
	email         : 'garcia@gmail.com',
	notifications : []
};

if (user.notifications === []) {
	console.log('No new notifications!'); // This will not work for the same reason that every time we type an empty array JS saves a new reference location to that empty array.
}
// This would work:
if (user.notifications.length === 0) {
	console.log('No new notifications!'); // This works!
}
// or an even shorter way to write this would be:
if (!user.notifications.length) {
	console.log('No new notifications!'); // This works because .length would give us "0" in this scenario because the array is empty and "0" is falsy. So this is saying if there is no length we get no new notifications.
}
// ** We cannot easily compare values in arrays without looping through **

/*
=================================
Shorthand Properties
=================================
*/

// old method
const getStats = arr => {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const sum = arr.reduce((sum, r) => sum + r);
	const avg = sum / arr.length;
	return {
		max : max,
		min : min,
		sum : sum,
		avg : avg
	};
};
const reviews = [ 4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5 ];
const stats = getStats(reviews);
console.log(stats); // -> { max: 5, min: 2.8, sum: 26.74, avg: 3.82 }

// new shorthand method
const getStats = arr => {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const sum = arr.reduce((sum, r) => sum + r);
	const avg = sum / arr.length;
	return {
		// we take the variables that we have and use them to both set the key name and the corresponding value
		max,
		min,
		sum,
		avg
	};
};
const reviews = [ 4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5 ];
const stats = getStats(reviews);

// Example 1: Get Card Challenge
function pick(arr) {
	// return random element from array
	const randomElement = Math.floor(Math.random() * arr.length);
	return arr[randomElement];
}

function getCard() {
	const values = [
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
	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	const value = pick(values);
	const suit = pick(suits);
	return {
		value,
		suit
	};
}

/*
=================================
Computed Properties
=================================
- "Computed Properties" are just an improvement for the object literal syntax where we can add a property with a dynamic key.
*/
const role = 'host';
const person = 'Katie Neil';
const role2 = 'Director';
const person2 = 'Ryan Neil';

// old method
const team = {
	role : person
};
console.log(team); // -> { role: "Katie Neil" } (we don't want this)

// new method with computed properties
const team = {
	[role]  : person,
	[role2] : person2
};
console.log(team); // -> { host: "Katie Neil", Director: "Ryan Neil" }
// ** we can use a variable as a key name in an object literal property **

// Example 2: A function that accepts an object and returns a copy of that object with a new property added in
const role = 'host';
const person = 'Katie Neil';
const role2 = 'Director';
const person2 = 'Ryan Neil';

const team = {
	[role]  : person,
	[role2] : person2
};

// not using computed properties
function addProp(obj, key, val) {
	const objClone = { ...obj };
	objClone[key] = val;
	return objClone;
}
const result = addProp(team, 'happy', ':)');
console.log(result);
// ->  { host: "Katie Neil", Director: "Ryan Neil", happy: ":)" }

// using computed properties
const addProp = (obj, key, val) => {
	return {
		...obj,
		[key] : val
	};
};
const result = addProp(team, 'excited', ':)');
console.log(result);
// ->  { host: "Katie Neil", Director: "Ryan Neil", excited: ":)" }

/*
=================================
Adding Methods to Objects
=================================
- We can add functions as properties on objects. We call these "methods".
- The most basic reason we would do this is to simply group functions together.
*/
const mathFuncs = {
	add      : function(x, y) {
		return x + y;
	},
	multiply : function(x, y) {
		return x * y;
	},
	divide   : function(x, y) {
		return x / y;
	},
	square   : function(x) {
		return x * x;
	}
};
mathFuncs.add(2, 3); // -> 5
mathFuncs.multiply(2, 3); // -> 6
mathFuncs.divide(10, 5); // -> 2
mathFuncs.square(2); // -> 4

/*
=================================
Method Shorthand Syntax
=================================
- We do this so often that there's a new shorthand way of adding methods.
*/
const mathFuncs = {
	blah     : 'Hi!',
	// this shorthand method takes "add" as the key automatically
	add(x, y) {
		return x + y;
	},
	multiply(x, y) {
		return x * y;
	}
};
console.log(mathFuncs);
// -> add: function add(x,y)
// -> blah: "Hi!"
// -> multiply: function multiply(x,y)
