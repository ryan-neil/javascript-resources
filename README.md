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
- [Fake API for testing and prototyping (JSON Placeholder)](https://jsonplaceholder.typicode.com/)
- [CSS -> JavaScript](https://css2js.dotenv.dev/)
- [Guide to CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [GitHub Markdown](https://guides.github.com/features/mastering-markdown/)

## 📓 Notes

## Table of Contents

  1. [For Loops](#for-loops)
  1. [Parameters vs. Arguments](#parameters-vs.-arguments)
  1. [Higher-Order Functions](#higher-order-functions)
  1. [Destructuring](#destructuring)
  1. [Spread](#spread)
  1. [Rest](#rest)

#### For Loops
###### for...in
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

###### for...of
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

###### forEach()
Finally, `forEach()` is a method of the `Array` prototype, which allows you to iterate over the elements of an array. While `forEach()` only iterates over arrays, it can access both the value and the index of each element while iterating.

```javascript
['a', 'b', 'c'].forEach(
  val => console.log(val) // -> a, b, c (array values)
);

['a', 'b', 'c'].forEach(
  (val, i) => console.log(i) // -> 0, 1, 2 (array indexes)
);
```

**[⬆ back to top](#table-of-contents)**

#### Parameters vs. Arguments
A __*parameter*__ is the variable name, defined in the function signature, of the value which will be given as an __*argument*__. 

It's important to distinguish them, as a parameter can represent many different values or even types of values, while an argument will only be that specific value at the time of evaluation.

In this *square* function, *number* is the __*parameter*__ and *6* is the __*argument*__ being passed into the function:

```javascript
function square(number) {
  return number * number;
}
square(6); // -> 36
```

#### Higher-Order Functions
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

**[⬆ back to top](#table-of-contents)**

#### Destructuring

###### Object Destructuring
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

###### Array Destructuring

```javascript
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

###### Destructuring multiple return values
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

**[⬆ back to top](#table-of-contents)**

#### Spread
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
const c = [...b]; // -> c = [4, 5, 6], b !== c

// Concatenate two arrays
const d = [...a, ...b]; // -> d = [1, 2, 3, 4, 5, 6]

// Flatten an array
const e = [[1, 2], [3, 4]];
const f = [...e[0], ...e[1]]; // -> f = [1, 2, 3, 4]

// Convert iterable to array
const g = [...'hello']; // -> g = ['h', 'e', 'l', 'l', 'o']
```

**[⬆ back to top](#table-of-contents)**

#### Rest
The rest parameter syntax allows you to collapse any remaining arguments into an array. While it looks very similar to the spread operator, the rest parameter syntax is only used in function declarations (arrow or otherwise).

```javascript
// Rest parameter syntax, not to be confused with the spread operator
const fn = (str, ...nums) => `${str}_${nums.join('')}`;
fn('hi', 1, 2, 3); // -> 'hi_123', `nums` will be [1, 2, 3]

const data = [4, 5, 6];
// Spread operator, expanding the array
fn('hey', ...data); // -> 'hey_456', `nums` will be [4, 5, 6]
```

**[⬆ back to top](#table-of-contents)**
