![js-gif](https://user-images.githubusercontent.com/59746024/108250339-3946ac80-70fa-11eb-9441-607fce5c3843.gif)

# JavaScript Resources
This is an ever-evolving collection of the most common JavaScript features and code samples.

## 📌 Repo Features
1. Arrays
2. Arrow Functions
3. The Basics
4. Callbacks
5. Destructuring
6. The Dom
7. Functions
8. JSON Files
9. Loops
10. Objects
11. Rest
12. Spread
13. "This" Keyword

## 📂 Repo Folder Structure
`/src/` - contains the source files for the Github repo. \
`/src/js/` - contains all JavaScript files. \
`/src/js/analysis/` - contains the breakdown of JavaScript coding projects. \
`/src/js/challenges/` - contains some example JavaScript challenges for practice.

## 🔗 Resources
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Array Methods v1](https://www.freecodecamp.org/news/complete-introduction-to-the-most-useful-javascript-array-methods/)
- [Array Methods v2](https://javascript.info/array-methods)
- [30 Seconds of Code](https://www.30secondsofcode.org/)
- [Fake API for testing and prototyping (JSON Placeholder)](https://jsonplaceholder.typicode.com/)
- [CSS -> JavaScript](https://css2js.dotenv.dev/)
- [Guide to CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [GitHub Markdown](https://guides.github.com/features/mastering-markdown/)

## 📓 Notes

### Table of Contents

  1. [For Loops](#for-loops)
  1. [Conditionals](#conditionals)
  1. [Ternary Operator](#ternary-operator)
  1. [Array Methods](#array-methods)
     * [forEach Method](#foreach-method)
     * [map Method](#map-method)
  1. [Objects](#objects)
  1. [Functions](#functions)
  1. [Parameters vs. Arguments](#parameters-vs-arguments)
  1. [Higher-Order Functions](#higher-order-functions)
  1. [Destructuring](#destructuring)
  1. [Spread](#spread)
  1. [Rest](#rest)

### For Loops
#### for...in
`for...in` is used to iterate over all enumerable properties of an object, including inherited enumerable properties. This iteration statement can be used with arrays strings or plain objects, but not with `Map` or `Set` objects.

```javascript
for (let prop in ['a', 'b', 'c'])
  console.log(prop); // -> 0, 1, 2 (array indexes)

for (let prop in 'str')
  console.log(prop); // -> 0, 1, 2 (string indexes)

for (let prop in {a: 1, b: 2, c: 3})
  console.log(prop); // -> a, b, c (object property names)

for (let prop in new Set(['a', 'b', 'a', 'd']))
  console.log(prop); // -> undefined (no enumerable properties)
```

#### for...of
`for...of` is used to iterate over iterable objects, iterating over their values instead of their properties. This iteration statement can be used with arrays, strings, `Map` or `Set` objects, but not with plain objects.

```javascript
for (let val of ['a', 'b', 'c'])
  console.log(val); // -> a, b, c (array values)

for (let val of 'str')
  console.log(val); // -> s, t, r (string characters)

for (let val of {a: 1, b: 2, c: 3})
  console.log(prop); // -> TypeError (not iterable)

for (let val of new Set(['a', 'b', 'a', 'd']))
  console.log(val); // -> a, b, d (Set values)
```

**[⬆ Back to top](#table-of-contents)**

### Conditionals
Conditional Statements are used for making decisions with code. They can have 3 different pieces, an __if__, an __else if__, and __else__.

`if` = Run the code *if* a given condition is true
`else if` = if not the first thing, maybe this other thing??
`else` = if nothing *else* was true, run this...

```javascript
let rating = 2;

if (rating === 3) {
  console.log('You are a superstar!');
} else if (rating === 2) {
	console.log('Meets expectations');
} else if (rating === 1) {
	console.log('Needs improvement');
} else {
	console.log('Invalid Rating');
}
// -> 'Meets expectations'
```

**[⬆ Back to top](#table-of-contents)**

### Ternary Operator
A shortcut syntax that we can use for certain conditionals. It basically takes an __if__ and an __else__ and turns them into a single line of code. This will only work if there are no __else if__ statements.

Syntax:
`condition ? expIfTrue : expIfFalse`

```javascript
// Old
let status = 'offline';
let color = '';

if (status === 'offline') {
	color = 'red';
} else {
	color = 'green';
}

// New
let status = 'offline';

let color = status === 'offline' ? 'red' : 'green'; // -> 'red'
```

**[⬆ Back to top](#table-of-contents)**

### Array Methods
Here is a collection of some of the most useful methods explained with examples.

#### forEach Method
The `forEach` method executes a provided function once for every element in the array.

Syntax: `Array.forEach(callback(currentValue [, index [, array]])[, thisArg]);`

```javascript
const testScores = [ 89, 92, 76, 99 ];

testScores.forEach(function(score) {
	console.log(score);
});
// -> 89, 92, 76, 99
```

The equivalent `for loop` code for the above example looks like this:

```javascript
const testScores = [ 89, 92, 76, 99 ];

for (let i = 0; i < testScores.length; i++) {
	console.log(testScores[i]);
}
```

The thing you need to keep in mind is that the forEach method does not return any value.

```javascript
const testScores = [ 89, 92, 76, 99 ];

const returnedValue = testScores.forEach(function(score) {
	return score;
});
console.log('returnedValue: ', returnedValue);
// -> returnedValue: undefined
```

>    Note that `forEach` is only used to loop through the array and perform some processing or logging. It does not return any value, even if you explicitly return a value from the callback function (this means that the returned value comes as `undefined` in the above example).

In all the above examples, we have used only the first parameter of the callback function. But the callback function also receives two additional parameters, which are:

* index - the index of the element which is currently being iterated
* array - original array which we're looping over

```javascript
const testScores = [ 89, 92, 76, 99 ];

testScores.forEach(function(scores, index, array) {
	console.log(scores, index, array);
});
// -> 89 0 [89, 92, 76, 99]
// -> 92 1 [89, 92, 76, 99] ... etc.
```

Advantages of using forEach instead of a for loop:
* Using a `forEach` loop makes your code shorter and easier to understand
* When using a `forEach` loop, we don't need to keep track of how many elements are available in the array. So it avoids the creation of an extra counter variable.
* Using a `forEach` loop makes code easy to debug because there are no extra variables for looping through the array
* The `forEach` loop automatically stops when all the elements of the array are finished iterating.

#### map Method
```javascript

```
The Array map method is the most useful and widely used array method among all other methods.

Syntax:
```javascript
Array.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
```

The `map` method executes a provided function once for every element in the array and it returns a new transformed array.

```javascript
const students = [ 'John', 'Jane', 'Katie' ];
const transformedArray = students.map(function(student) {
	return student.toUpperCase();
});
console.log(transformedArray); 
// -> [ "JOHN", "JANE", "KATIE" ]
```

In the above code, inside the callback function, we’re converting each element to uppercase and returning it.
The equivalent for loop code for the above example looks like this:

```javascript
const students = [ 'John', 'Jane', 'Katie' ];
const converted = [];

for (let i = 0; i < students.length; i++) {
	converted.push(students[i].toUpperCase());
}
console.log(converted);
```

Using `map` helps to avoid creating a separate `converted` array beforehand for storing the converted elements. So it saves memory space and also the code looks much cleaner using array `map`.

Note that the `map` method returns a new array that is of the exact same length as the original array.

The difference between the `forEach` and `map` methods is that `forEach` is only used for looping and does not return anything back. On the other hand, the `map` method returns a new array that is of the exact same length as the original array.

Also, note that `map` does not change the original array but returns a new array.

```javascript
const users = [
	{
		firstName : 'John',
		lastName  : 'Doe'
	},
	{
		firstName : 'Jane',
		lastName  : 'Doe'
	},
	{
		firstName : 'Katie',
		lastName  : 'Jane'
	}
];
const userList = users.map(function(user) {
	return `${user.firstName} ${user.lastName}`;
});
console.log(userList);
// -> [ "John Doe", "Jane Doe", "Katie Jane" ]
```

The array map method is also useful, if you want to extract only specific data from the array like this:

```javascript
const users = [
	{
		firstName : 'John',
		lastName  : 'Doe',
		age       : 36
	},
	{
		firstName : 'Jane',
		lastName  : 'Doe',
		age       : 42
	},
	{
		firstName : 'Katie',
		lastName  : 'Jane',
		age       : 27
	}
];
const surnames = users.map(function(user) {
	return user.lastName;
});
console.log(surnames);
// -> [ "Doe", "Doe", "Jane" ]
```

In the above code, we're extracting only the last names of each user and storing them in an array.

Advantages of using the map method:

* It helps quickly generate a new array without changing the original array
* It helps generate an array with dynamic content based on each element
* It allows us to quickly extract any element of the array
* It generates an array with the exact same length as the original array

**[⬆ Back to top](#table-of-contents)**

### Objects
Objects are collections of *properties* which are a key value pair. Rather than accessing the data using an index, we use custom keys.

An object, compared to an array, is more like a container that holds different pieces of data called key's and value pairs where there's not necessarily any order to them. It's more about storing pairs of information.

We do not use a number [`0`] to access our data out like with an array, we would directly call for the data we need (city, age, zip, etc.)

Example of key-value pairs:
`key: value`
In the example below:
`totalSteps: --> 308727` - *totalSteps* would be a __key__ and *308727* would be a __value__

```javascript
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
```

It's important to remember that all __keys__ are converted to *strings*.

```javascript
const numbers = {
	100 : 'one hundred',
	16  : 'sixteen'
};

// bad
numbers.100; // -> SyntaxError!!!
// good
numbers[100]; // -> "one hundred"
```

#### Nested Objects and Arrays
Our *objects* and *arrays* can have other nested *objects* and *arrays*.

```javascript
const student = {
	firstName : 'David',
	lastName  : 'Jones',
	strengths : [ 'Music', 'Art' ],
	exams     : {
		midterm : 92,
		final   : 88
	}
};
// Finding the average score of exams:
student.exams.average = ''; // here we're adding an "average" property to the end of the "exams" object
student.exams.average = (student.exams.midterm + student.exams.final) / 2;
console.log(student.exams.average); 
// -> 90
console.log(student.exams); 
// -> {midterm: 92, final: 88, average: 90}
```

**[⬆ Back to top](#table-of-contents)**

### Parameters vs. Arguments
A __*parameter*__ is the variable name, defined in the function signature, of the value which will be given as an __*argument*__. 

It's important to distinguish them, as a parameter can represent many different values or even types of values, while an argument will only be that specific value at the time of evaluation.

In this *square* function, *number* is the __*parameter*__ and *6* is the __*argument*__ being passed into the function:

```javascript
function square(number) {
  return number * number;
}
square(6); // -> 36
```

**[⬆ Back to top](#table-of-contents)**

### Higher-Order Functions
A Higher-Order Function can take functions as arguments and/or return a function.

```javascript
function randomNumGen() {
	return Math.floor(Math.random() * 1000);
}

function id(name, randFunc) {
	return name + '-' + randFunc();
}
const userID = id('Ryan', randomNumGen);

console.log(userID); // -> Ryan-766
```

**[⬆ Back to top](#table-of-contents)**

### Destructuring

#### Object Destructuring
Destructuring saves you from creating temporary references for those properties, and from repetitive access of the object. 

Repeating object access creates more repetitive code, requires more reading, and creates more opportunities for mistakes. 

Destructuring objects also provides a single site of definition of the object structure that is used in the block, rather than requiring reading the entire block to determine what is used.

```javascript
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

#### Array Destructuring

```javascript
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

#### Destructuring multiple return values
We use object destructuring for multiple return values, not array destructuring.

Why? You can add new properties over time or change the order of things without breaking call sites.

```javascript
// bad
function processInput(input) {
  // then a miracle occurs
  return [left, right, top, bottom];
}
// the caller needs to think about the order of return data
const [left, __, top] = processInput(input);

// good
function processInput(input) {
  // then a miracle occurs
  return { left, right, top, bottom };
}
// the caller selects only the data they need
const { left, top } = processInput(input);
```

**[⬆ Back to top](#table-of-contents)**

### Spread
The spread operator (`...`) allows you to expand a single array into its values. Some common use-cases for the spread operator include:

* Expanding an array's values to pass them as arguments to a function that does not accept an array.
* Cloning an array by spreading its values into a new array (`[]`).
* Concatenating arrays by spreading them into a new array (`[]`).
* Flattening an array of arrays one level, by spreading nested arrays.
* Converting a non-array iterable (e.g. a string or a `Set`) to an array.

```javascript
// Array's values as arguments
const a = [1, 2, 3];
Math.max(...a); // -> 3

// Clone an array
const b = [4, 5, 6];
const c = [...b];
console.log(c); // -> [4, 5, 6], b !== c

// Concatenate two arrays
const d = [...a, ...b]; 
console.log(d); // -> [1, 2, 3, 4, 5, 6]

// Flatten an array
const e = [[1, 2], [3, 4]];
const f = [...e[0], ...e[1]]; 
console.log(f); // -> [1, 2, 3, 4]

// Convert iterable to array
const g = [...'hello']; 
console.log(g); // -> g = ['h', 'e', 'l', 'l', 'o']
```

**[⬆ Back to top](#table-of-contents)**

### Rest
The rest parameter syntax allows you to collapse any remaining arguments into an array. While it looks very similar to the spread operator, the rest parameter syntax is only used in function declarations (arrow or otherwise).

```javascript
// Rest parameter syntax, not to be confused with the spread operator
const foo = (str, ...nums) => `${str}_${nums.join('')}`;
foo('hi', 1, 2, 3); // -> 'hi_123', `nums` will be [1, 2, 3]

const data = [4, 5, 6];
// Spread operator, expanding the array
foo('hey', ...data); // -> 'hey_456', `nums` will be [4, 5, 6]
```

**[⬆ Back to top](#table-of-contents)**
