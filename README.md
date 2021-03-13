# JavaScript Resources
<img src="/src/assets/js-resources.gif" width="800" alt="js-resources-gif">

## Introduction
The goal of this document is to provide a quick reference guide for the main features of JavaScript along with simple to understand sample code.

This guide is not intended to teach you the fundamentals of the JavaScript programming language but merely a reference guide to come back to for a quick refresher.

###### If you found this guide helpful give me a follow and let me know! 🤙🏻
[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/josephskycrest.svg?style=social&label=Follow%20%40josephskycrest)](https://twitter.com/josephskycrest)

## 🧐 What's inside?
A quick look at the files and directories you'll see in the repo.

```bash
  .
  ├── src
    ├── assets
      ├── repo image files
    └── js
      ├── components
        ├── arrays.js
        ├── arrow-functions.js
        ├── basics.js
        ├── callbacks.js
        ├── destructuring.js
        ├── dom.js
        ├── functions.js
        ├── json.js
        ├── loops.js
        ├── objects.js
        ├── rest.js
        ├── spread.js
        └── this.js
      ├── console-testing
      └── projects
```

  1. **`/src`**: This directory contains all of the source files for the Github repo. \
    1. **`/assets`**: This directory contains images for the repo. \
    1. **`/js`**: This directory contains all JavaScript component files.
      1. **`/components`**: This directory contains all the javascript repo files for the important features of JavaScript. Each file contains simple explanations along with example code for the features.
      1. **`/console-testing`**: This directory contains a starting project boilerplate for testing JavaScript code.
      1. **`/projects`**: This directory contains some example JavaScript projects for reference.

## 🔗 Resources
  - [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [Dev Docs](https://devdocs.io/javascript/)
  - [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
  - [Code Academy JavaScript Cheatsheet](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet)
  - [FCC Beginner's Handbook 2020](https://www.freecodecamp.org/news/the-complete-javascript-handbook-f26b2c71719c/#objectproperties)
  - [30 Seconds of Code](https://www.30secondsofcode.org/)
  - [Medium JavaScript](https://medium.com/topic/javascript)
  - [JavaScript Visualized](https://dev.to/lydiahallie/series/3341)
  - [1 Line - JavaScript Utilities](https://1loc.dev/)

#### Misc Resources:
  - [Fake API for testing and prototyping (JSON Placeholder)](https://jsonplaceholder.typicode.com/)
  - [CSS -> JavaScript](https://css2js.dotenv.dev/)
  - [Data Visualization - GoodData.UI](https://sdk.gooddata.com/gooddata-ui/)
  - [GitHub Markdown Styling](https://guides.github.com/features/mastering-markdown/)

## 📓 Notes
### Table of Contents

  1. [Running JavaScript](#running-javascript)
  1. [Commenting](#commenting)
  1. [Variables](#variables)
  1. [Naming Conventions](#naming-conventions)
  1. [Hoisting](#hoisting)
  1. [Properties](#properties)
  1. [For Loops](#for-loops)
  1. [Math](#math)
  1. [Conditionals](#conditionals)
  1. [Ternary Operator](#ternary-operator)
  1. [Objects](#objects)
  1. [Methods](#methods)
    * [Array Methods](#array-methods)
    * [Object Methods](#object-methods)
    * [String Methods](#string-methods)
  1. [Functions](#functions)
  1. [Destructuring](#destructuring)
  1. [Spread](#spread)
  1. [Rest](#rest)
  1. [This](#this)
  1. [The DOM](#the-document-object-model-dom)
    *  [DOM Methods and Properties](#dom-methods-and-properties)

  ----

### Running JavaScript

#### From the Command Line:
Running JavaScript from the command line is handled by NodeJS.

First, we need to [install Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if you haven't already.

Next, open the terminal in VS Code and move to the current directory where our `.js` file is located:

```bash
cd yourdirectoryname
```

Now that we're in the directory where our JavaScript file is located we can type the following command into the VS Code terminal to view the output of our code:

```bash
node yourJSfilename
```

This method allows us to view the output of our JavaScript code without the need of an HTML file! Pretty sweet.

#### From the Browser:

#### Command-Line Keyboard Shortcuts:
Here's a curated list of some of the most used CLI shortcuts.
##### Moving the cursor
`CTRL-A`/`HOME`: Move to the beginning of a line. \
`CTRL-E`/`END`: Move to the end of a line. \
`OPT-LEFT`: Move left one word. \
`OPT-RIGHT`: Move right one word.
##### Editing Text
`CTRL-U`: Cut all the characters. \
`CTRL-_`: Undo the last edit.
##### Managing the screen
`CTRL-L`: Clear screen (just like `clear`). \
`CTRL-S`: Stop screen output. Useful for preventing processes from spamming the stdout. \
`CTRL-Q`: Resume screen output. \
`CTRL-D`: Exit shell (just like exit).
##### Accessing Command History
`CTRL-R`: Search the command history. Accept with `ENTER`/`RETURN`, abort with CTRL-G. \
`CTRL-P`/`UP`: The previous command in history. \
`CTRL-N`/`DOWN`: The next command in history.

----

### Commenting

We want to use `/** ... */` for multiline comments.

```javascript
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {
	
  // ...

  return element;
}
```

Use want to use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it’s on the first line of a block. Start all comments with a space to make it easier to read.

```javascript
// bad
const active = true; // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// also good
function getType() {
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}
```

> When it comes to commenting, don't explain what the code does, explain what the intentions of the code are. Generally, anyone can tell what the code is doing by looking at it, but it can often be impossible to understand why it's being done just by looking at the code alone. - Some internet guy

**[⬆ Top](#table-of-contents)**

----

### Variables

We always want to use `const` or `let` to declare variables. Not doing so will result in global variables. We need to be carful not to muddy up the global namespace.

The `const` keyword works exactly the same as `let`, except that variables declared using `const` cannot be reassigned later in the code.

```javascript
const daysInWeek = 7;

let counter = 1;
let counter = counter + 1; // -> 2
```

**[⬆ Top](#table-of-contents)**

----

### Naming Conventions
If possible, avoid single letter names. Be descriptive with your naming.

```javascript
// bad
function q() {
  // ...
}

// good
function query() {
  // ...
}
```

Always use camelCase when naming objects, functions, and instances.

```javascript
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

Use PascalCase only when naming constructors or classes.

```javascript
// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
```

Acronyms and initialisms should always be all uppercased, or all lowercased. This is because names are for readability, not to appease a computer algorithm.

```javascript
// bad
import SmsContainer from './containers/SmsContainer';

// bad
const HttpRequests = [
  // ...
];

// good
import SMSContainer from './containers/SMSContainer';

// good
const HTTPRequests = [
  // ...
];
```

**[⬆ Top](#table-of-contents)**

----

### Hoisting

#### What is Hoisting?
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

> Note: the hoisting mechanism only moves the declaration. The assignments are left in place. 

__var__:
```js
console.log(x); // -> undefined
var x = 0;
```
In the above code, the `var` keyword is pushed above the code and initialized automatically by JavaScript (only `x` variable is pushed above, not the value 0). So at the time of execution, the code looks something like this:
```js
var x; // automatically inserted by JS Engine at run time
console.log(x);
var x = 0;
```
`x` has been pushed above and initialized by the JS engine, that's why we get undefined at the console line instead of a `ReferenceError`.

#### Hoisting with let and const:
In the case of `var`, when JavaScript moves all the variables and functions to the top of the code, it __initializes__ it. This is not the case with `let` and `const`. 

__let__:
```js
console.log(y); // -> ReferenceError: Cannot access 'y' before initialization
let y = 0;
```
__const__:
```js
console.log(z); // -> ReferenceError: Cannot access 'z' before initialization
const z = 0;
```
In the case of `let` and `const`, the JavaScript engine hoists the variable declarations but __doesn't initialize__ them. The JS engine is aware of the variable, but it can not be used until it is declared or initialized.

#### Hoisting a Function:
Functions __are__ hoisted in JavaScript. On the contrary, function expressions __are not__ hoisted in JavaScript.

```js
let x = 20;
let y = 30;

let total = add(x, y);
console.log(total); // -> 50, because the function is hoisted

function add(a, b) {
  return a + b;
}
```
In the above code, the output will be `50` as the regular function is also hoisted (moved to the top of the script) in JavaScript.

What about when we have a function expression?
```js
let x = 20;
let y = 30;

let total = sum(x, y);
console.log(total); // -> TypeError: sum is not a function

// function expression with var
var sum = function(a, b) {
  return a + b;
};
```
As the function is stored in the variable `sum` (declared by `var` keyword), it is hoisted and initialized above (not the function expression, as only the variable is pushed above, not the value), and the value of `sum` gets undefined. Therefore we get `sum` is not a function as it is undefined.

At the time of execution, the code looks something like this:
```js
let x = 20;
let y = 30;
var sum; // automatically inserted by JS engine

let total = sum(x, y);
console.log(total);

var sum = function(a, b) {
  return a + b;
};
```

#### Why is Hoisting Important?

Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript. If a developer doesn't understand hoisting, programs may contain bugs (errors).

To avoid bugs, always declare all variables at the beginning of every scope.

**[⬆ Top](#table-of-contents)**

----

### Properties
We want to use dot notation when accessing properties.

```javascript
const thor = {
  superhero: true,
  age: 1500
};

// bad
const isSuperhero = thor['superhero'];

// good
const isSuperhero = thor.superhero;
```

We want to use bracket notation `[]` when accessing properties with a variable.

```javascript
const thor = {
  superhero: true,
  age: 1500
};

function getProp(prop) {
  return thor[prop];
}

const isSuperhero = getProp('superhero');
```

**[⬆ Top](#table-of-contents)**

----

### For Loops

The 4 for loops of JavaScript:
```javascript
// traditional
let arr = [ 'thor', 'ironman', 'hulk', 'loki' ];
for (let i = 0; i < arr.length; i++) {
  console.log(i);
  console.log(arr[i]);
}
// -> 0, 1, 2, 3
// -> thor, ironman, hulk, loki
```

```javascript
// for ... of
let arr = [ 'thor', 'ironman', 'hulk', 'loki' ];
for (let item of arr) {
  console.log(item);
}
// -> thor, ironman, hulk, loki
```

```javascript
// for ... in
let arr = [ 'thor', 'ironman', 'hulk', 'loki' ];
for (let item in arr) {
  console.log(item);
}
// -> 0, 1, 2, 3
```

```javascript
// forEach
let arr = [ 'thor', 'ironman', 'hulk', 'loki' ];
arr.forEach((item, idx) => {
  console.log(item, idx);
});
// -> thor [0], ironman [1], hulk [2], loki [3]
```

#### for:
The __for statement__ creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

Syntax:
```javascript
for ([initialization]; [condition]; [final-expression])
  [statement];
```

Example:
```javascript
const examScores = [ 98, 77, 84, 91 ];

for (let i = 0; i < examScores.length; i++) {
  console.log(examScores[i]);
}
// -> 98, 77, 84, 91
```

#### for..in:
A `for...in` loop only iterates over enumerable, non-Symbol properties. We're returned the indeces rather than the values.

Syntax:
```javascript
for ( [variable] in [iterable] ) {
  [statement];
}
```

Example:
```javascript
let sports = [ 'soccer', 'football', 'basketball', 'baseball' ];

for (let sport in sports) {
  console.log(sport);
}
// -> 0, 1, 2, 3 (these are the string indeces)
```

#### for..of:
`for...of` is an easier way to iterate over arrays (or other iterable objects)

Syntax:
```javascript
for ( [variable] of [iterable] ) {
  [statement];
}
```

Example:
```javascript
let sports = [ 'soccer', 'football', 'basketball', 'baseball' ];

for (let sport of sports) {
  console.log(sport);
}
// -> soccer, football, basketball, baseball
```

Same example with a traditional `for` method:
```javascript
let sports = [ 'soccer', 'football', 'basketball', 'baseball' ];

for (let i = 0; i < sports.length; i++) {
  console.log(sports[i]);
}
```

#### for..of vs. for..in:
Both `for..of` and `for..in` statements iterate over lists; the values iterated on are different though: 
* `for..in` returns a list of keys on the object being iterated. 
* `for..of` returns a list of values of the numeric properties of the object being iterated.

Example:
```javascript
let sports = [ 'soccer', 'football', 'basketball' ];

for (let i in sports) {
  console.log(i);
}
// -> "0", "1", "2",

for (let i of sports) {
  console.log(i);
}
// -> soccer, football, basketball
```

> We can remember this by: for "in" for `index` and for "of" would be the `values` of each index/key/item.

**[⬆ Top](#table-of-contents)**

----

### Math
`Math` is a built-in object that has *properties* and *methods* for mathematical constants and functions. It’s not a function object.

Value of pi:
```javascript
Math.PI; // -> 3.141592653589793
```
Rounding a number:
```javascript
Math.round(4.9); // -> 5
```
Absolute value:
```javascript
Math.abs(-456); // -> 456
```
Power, raise 2 to the 5th power:
```javascript
Math.pow(2, 5); // -> 35
```
Remove decimal point:
```javascript
Math.floor(3.999); // -> 3
```

#### Random Numbers:
`Math.random()` gives us a random decimal between 0 and 1 (non-inclusive)
```javascript
Math.random(); // -> 0.3909038834734563
Math.random(); // -> 0.8165536795157997 etc.
```

#### Random Integers:
`Math.random()` times 10 gives us a random decimal number up to 9.999...
```javascript
Math.random() * 10; // -> 1.373859877092636
Math.random() * 10; // -> 5.467900649576393
Math.random() * 10; // -> 9.245014588722578 etc.
```

`Math.floor()` removes the decimal point. And gives us a number from 0 to 9.
```javascript
Math.floor(Math.random() * 10); // -> 0
Math.floor(Math.random() * 10); // -> 5
Math.floor(Math.random() * 10); // -> 9 etc.
```

Adding `+1` to `Math.floor(Math.random() * 10)` gives us a number from 0 to 10.
```javascript
Math.floor(Math.random() * 10) + 1; // -> 7
Math.floor(Math.random() * 10) + 1; // -> 3
Math.floor(Math.random() * 10) + 1; // -> 10 etc.
```

**[⬆ Top](#table-of-contents)**

----

### Conditionals
Conditional Statements are used for making decisions with code. They can have 3 different pieces, an __if__, an __else if__, and __else__.

`if` = Run the code `if` a given condition is true \
`else if` = if not the first thing, maybe this other thing?? \
`else` = if nothing `else` was true, run this...

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

#### Nesting Conditional Statements:
```javascript
let password = 'catdog';
if (password.length >= 8) {
  if (password.indexOf(' ') !== -1) {
    console.log('Password cannot include spaces');
  } else {
    console.log('Valid password!');
  }
} else {
  console.log('Password too short!');
}
```

#### Conditionals and Logical Operators: And, Or and Not
If you want to test multiple conditions without writing nested `if...else` statements, logical operators can help you. When used in conditions, the first two do the following:

`&& -> And`
`|| -> Or`
`! -> Not`

##### And (`&&`):
With the `and` logical operator, both sides of the && needs to be true for the entire statement to be true.

```javascript
1 <= 4 && 'a'; // -> true
9 > 10 && 9 >= 9; // -> false
'abc'.length === 3 && 1 + 1 === 4; // -> false
```

Example: Password checker

```javascript
let password = 'taco tuesday';

// This is checking if the password is greater than or equal to 8 characters AND does not contain a space
if (password.length >= 8 && password.indexOf(' ') === -1) {
  console.log('Valid password!');
} else {
  console.log('Invalid password!');
}
// -> Invalid password! (password contains a space)
```

##### Or (`||`):
With the `or` logical operator, only one side of the "pipe" needs to be true for the entire statement to be true.

```javascript
1 !== 1 || 10 === 10; // -> true
10 / 2 === 5 || null; // -> true
0 || undefined; // -> false
```

Example: Community theater program

```javascript
let age = 76;

if (age < 6 || age >= 65) {
  console.log('You get in for free!');
} else {
  console.log('That will be $10 please.');
}
// -> You get in for free!
```

##### Not (`!`):
With the `not` logical operator, the expression returns true if the expression is false.

```javascript
!null; // -> true (this is saying, not null)
!(0 === 0); // -> false (0 = 0 is truthy so not truthy is falsy)
!(3 <= 4); // -> false (3 IS less than or equal to 4 so not true is false)
!45; // -> false (45 is truthy so not "true" [45] is falsy)
```

Example: Online snow cone stand with only 2 flavors (grape and cherry)

```javascript
let flavor = strawberry;

// first way to solve this:
if (flavor !== 'grape' && flavor !== 'cherry') {
  console.log("We don't have that flavor!");
}
// or an example using not (!):
if (!(flavor === 'grape' || flavor === 'cherry')) {
  console.log("We don't have that flavor!");
}
// -> We don't have that flavor!
```

#### Switch Statements:
Switch statements take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it.

```javascript
let day = 2;

switch (day) {
  case 1:
    console.log('Monday');
    break;
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

  default: // this is equivalent to "else"
    console.log('Invalid day');
}
// -> Tuesday
```

Sometimes we can have multiple variables that we are checking against one value:

```javascript
let item = 'Mangoes';

switch (item) {
  case 'Oranges':
  case 'Apples':
    console.log('Oranges and Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and Papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${item}.`);
}
// -> Mangoes and papayas are $2.79 a pound.
```

**[⬆ Top](#table-of-contents)**

----

### Ternary Operator
A shortcut syntax that we can use for certain conditionals. It basically takes an __if__ and an __else__ and turns them into a single line of code. This will only work if there are no __else if__ statements.

Syntax:
```javascript 
condition ? expIfTrue : expIfFalse
```

Example:
```javascript
// new
let status = 'offline';

let color = status === 'offline' ? 'red' : 'green'; // -> 'red'

// old
let status = 'offline';
let color = '';

if (status === 'offline') {
  color = 'red';
} else {
  color = 'green';
}
```

**[⬆ Top](#table-of-contents)**

----

### Objects
Objects are collections of *properties* which are a key value pair. Rather than accessing the data using an *index*, we use custom *keys*.

An object, compared to an array, is more like a container that holds different pieces of data called *key* and *value* pairs where there's not necessarily any order to them. It's more about storing pairs of information.

We do not use a number [`0`] to access our data out like with an array, we would directly call for the data we need (city, age, zip, etc.)

Example of key-value pairs: \
`key: value` \
In the example below: \
`totalSteps: 308727` - *totalSteps* would be a __key__ and *308727* would be a __value__

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

#### Nested Objects and Arrays:
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

**[⬆ Top](#table-of-contents)**

----

### Methods
This is a collection of the most commonly used ES5 and ES6+ methods for arrays, objects and strings.

JavaScript methods are actions that can be performed on objects. Methods are functions stored as object properties.

[Useful Methods](https://dev.to/otamnitram/my-most-used-javascript-methods-1i64)

#### Array Methods:

##### Resources:
* [Array Methods](https://www.w3schools.com/js/js_array_methods.asp)

#### .map()
This returns a new array with the result of a function for each element in another array. The array returned has the same length as the original array.

__Example__: Create an array that contains the square of each item of another array
```js
const numbers = [ 2, 4, 6 ];
const square = numbers.map(n => {
  return n * n;
});

console.log(square); // -> [ 4, 16, 36 ]
console.log(numbers); // -> [ 2, 4, 6 ]
```

[.map MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

#### .forEach()
This executes a provided function once for every element in the array.

__Example__: Loop through the array and print the numbers
```js
const testScores = [ 89, 92, 76, 99 ];

testScores.forEach(scores => {
  console.log(scores);
});
// -> 89
// -> 92
// -> 76
// -> 99
```

forEach also allows us to receive two additional parameters:
* `index` - the index of the element which is currently being iterated
* `array` - original array which we're looping over

```js
const testScores = [ 89, 92, 76, 99 ];

testScores.forEach((scores, index, array) => {
  console.log(scores, index, array);
});
// -> 89 0 [ 89, 92, 76, 99 ]
// -> 92 1 [ 89, 92, 76, 99 ]
// -> 76 2 [ 89, 92, 76, 99 ]
// -> 99 3 [ 89, 92, 76, 99 ]
```

> Note: This is only used to loop through the array and perform some processing or logging. It does not return any value, even if you explicitly return a value from the callback function (this means that the returned value comes as `undefined` in the above example).

[.forEach MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

#### .reduce()
This executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

__Example__: Sum all numbers of the array
```js
const numbers = [ 1, 2, 3 ];

const sum = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);

console.log(sum); // -> 6
```

> Note: It’s always good to specify the `initialValue` of `accumulator` as it makes it easy to understand the return type of the `reduce` method and get the correct type of data back.

`.reduce()` under the hood:

__Example__: Multiply all the elements by two and sum all numbers of the array
```js
const numbers = [ 1, 2, 3 ];

const doubleSum = numbers.reduce((accumulator, number) => {
  return accumulator + number * 2;
}, 10);
console.log(doubleSum); // -> 22
```

Here, we’re multiplying each element of the array by 2. We have provided an `initialValue` of 10 to the `accumulator` so 10 will be added to the final result of the sum like this:

```javascript
[1 * 2, 2 * 2, 3 * 2] = [2, 4, 6] = 12 + 10 = 22
```

[.reduce MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

#### .filter()
This returns an array with all the elements of another array that meet a determined condition.

__Example__: Return numbers less than or equal to 100
```js
const numbers = [ 20, 200, 30, 45, 100, 102 ];

const result = numbers.filter(n => {
  return n <= 100;
});
console.log(result); // -> [ 20, 30, 45, 100 ]
```

[.filter MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

#### .some()
This tests whether __at least one__ element in the array passes the test condition given by the provided function and returns a boolean `true` or `false` value.

__Example__: Return true if there is a positive number in the array
```js
const numbers = [ -20, 32, -18 ];

const containsPositive = numbers.some(number => {
  return number > 0;
});
console.log(containsPositive); // -> true
```

[.some MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

#### .every()
This tests whether __all__ elements in the array pass the provided test conditions and returns a boolean `true` or `false` value.

__Example__: Return true if all numbers in the array are positive
```js
const numbers = [ 40, 32, -24 ];

const allPositive = numbers.every(number => {
  return number > 0;
});
console.log(allPositive); // -> false
```

[.every MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

#### (Array).slice()
This returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

__Example__: Return superheros who are Gods from the array
```js
const superheros = [ 'thor', 'loki', 'ironman', 'hulk' ];

const superheroGods = superheros.slice(0, 2);
console.log(superheroGods); // -> [ 'thor', 'loki' ]
```

[(Array).every MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

#### (Array).indexOf()
This returns the first index at which a given element can be found in the array, or -1 if it is not present.

__Example__: Find the index of "tiger" from the array
```js
const animals = [ 'dolphin', 'giraffe', 'tiger' ];

console.log(animals.indexOf('tiger')); // -> 2
console.log(animals.indexOf('lion')); // -> -1
``` 

[(Array).indexOf MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

#### Array.from()
This creates a new, shallow-copied Array instance from an array-like or iterable object.

__Example__: Return an array with each letter of my last name.
```js
const lastName = 'neil';
const lastNameLetters = Array.from(lastName);

console.log(lastNameLetters); // -> [ 'n', 'e', 'i', 'l' ]
console.log(lastName); // -> 'neil'
```

[Array.from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

#### .pop()
This __REMOVES__ an element from the __END__ of an array and returns that element. This method changes the length of the array.

__Example__: Remove a todo task from the end of the array
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

console.log(todo.pop()); // -> 'take out trash'
console.log(todo); // -> [ "do laundry", "wash dishes" ]
```

The `.pop()` method returns the value that was "popped" out. We can then save that value to a variable and use it:
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

let completedTask = todo.pop();
console.log(completedTask); // -> 'take out trash'
```

[.pop MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

#### .push()
This __ADDS__ an element to the __END__ of an array.

__Example__: Add a todo task to the end of the array
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

todo.push('vacuum');
console.log(todo); // -> [ 'do laundry', 'wash dishes', 'take out trash', 'vacuum' ]
```

The `push()` method returns the new array length:
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

let addedTask = todo.push('vacuum');
console.log(addedTask); // -> 4
```

[.push MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

#### .shift()
This __REMOVES__ an element from the __START__ of an array and "shifts" all other elements to a lower index.

__Example__: Remove a todo task from the start of the array
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

console.log(todo.shift()); // -> 'do laundry'
console.log(todo); // -> [ 'wash dishes', 'take out trash' ]
```

The `shift()` method returns the string that was "shifted out". We can then save that value to a variable and use it:
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

let completedTask = todo.shift();
console.log(completedTask); // -> 'do laundry'
```

[.shift MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

#### .unshift()
This __ADDS__ an element to the __START__ of an array and "unshifts" older elements.

__Example__: Add a todo task to the start of the array
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

todo.unshift('vacuum');
console.log(todo); // -> [ 'do laundry', 'wash dishes', 'take out trash', 'vacuum' ]
```

The `unshift()` method returns the new array length:
```js
let todo = [ 'do laundry', 'wash dishes', 'take out trash' ];

let addedTask = todo.unshift('vacuum');
console.log(addedTask); // -> 4
```

[.unshift MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

#### Object Methods:

##### Resources:
* [Object Methods](https://www.w3schools.com/js/js_object_properties.asp)

#### Object.values()
Returns an array of the object's values.

```js
const car = {
  name  : 'Audi',
  model : 'a4',
  year  : 2020
};
const values = Object.values(car);
console.log(values); // -> ['Audi', 'a4', 2020]
```

[Object.values MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values)

#### Object.keys()
Returns an array of the object's keys(names).

```js
const car = {
  name  : 'Audi',
  model : 'a4',
  year  : 2020
};
const keys = Object.keys(car);
console.log(keys); // -> ['name', 'model', 'year']
```

[Object.keys MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

#### Object.assign()
This is useful for merging or cloning objects.

```js
const car = {
  name  : 'Audi',
  model : 'a4',
  year  : 2020
};
const carDetails = {
  color : 'red',
  type  : 'Coupe',
  year  : 2021
};

const combined = Object.assign({}, car, carDetails);
console.log(combined); // -> { name: 'Audi', model: 'a4', color: 'red', type: 'Coupe', year: 2021 }
```

> Note: if both objects have the same property, it will take the value of the second object

[Object.assign MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

#### Object.entries()
Returns an array for each of the key:value pairs in the object wrapped in array.

```js
const car = {
  name  : 'Audi',
  model : 'a4',
  year  : 2020
};
const items = Object.entries(car);
console.log(items); // -> [ [ name:'Audi' ], [ model:'a4' ], [ year:2020 ] ]
```

[Object.entries MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

#### Object.freeze()
This "freezes" the object and makes it so we can no longer change it.

```js
const car = {
  name  : 'Audi',
  model : 'a4',
  year  : 2020
};
Object.freeze(car);

car.year = 2021;
console.log(car); // -> { name: 'Audi', model: 'a4', year: 2020 }
```

> Note: to check if the object is frozen or not use Object.isFrozen(car), if frozen it will return true, and false if not

[Object.entries MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

#### Object.seal()
This is similar to Object.freeze() but the difference is this lets you change the property of the object as long they are writeable (Not methods) But we CANNOT delete or add new properties.

```js
const car = {
  name  : 'Audi',
  model : 'a4',
  year  : 2020
};
Object.seal(car);

// good
car.year = 2021;
console.log(car.year); // -> 2021

// bad
delete car.year;
console.log(car.year); // -> 2021
```

> Note: to check if the object is sealed or not use Object.isSealed(car), if sealed it will return true, and false if not. 

[Object.entries MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)

#### String Methods:

##### Resources:
* [String Methods](https://www.w3schools.com/js/js_string_methods.asp)

#### .split()
This divides a string with a `separator` into an ordered list of substrings, puts these substrings into an array, and returns the array. Use the second parameter (`limit`) to return a limited number of splits.

__Example__: Separate the string with commas
```js
const str = 'JavaScript String split()';

const substrings = str.split(' ');
console.log(substrings); // -> [ 'JavaScript', 'String', 'split()' ]
``` 

Access a single word from the string
```js
const str = 'JavaScript String split()';

const substrings = str.split(' ');
console.log(substrings[0]); // -> 'JavaScript'
console.log(substrings[2]); // -> 'split()'
```

Access a single character from the string
```js
const str = 'JavaScript String split()';

const substrings = str.split('');
console.log(substrings[0]); // -> 'J'
console.log(substrings[11]); // -> 'S'
```

We can also copy the string with .split()
```js
const str = 'JavaScript String split()';

const strCopy = str.split();
console.log(strCopy); // -> [ 'JavaScript String split()' ]
```

[.split MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

#### (String).slice()
This extracts a section of a string and returns it as a new string, without modifying the original string.

__Example__: Extract the last two words from the string
```js
const str = 'JavaScript String split()';

const strSlice = str.slice(10);
console.log(strSlice); // ->  'String split()'
``` 

[(String).slice MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

#### (String).indexOf()
This returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

__Example__: Find the index of "String" from the string
```js
const str = 'JavaScript String split()';

const searchTerm = 'String';
const indexOfFirst = str.indexOf(searchTerm);
console.log(indexOfFirst); // -> 11
``` 

[(String).indexOf MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

**[⬆ Top](#table-of-contents)**

----

### Functions
A __function__ is simply a reusable procedure. Functions allow us to write reusable, modular code. We define a *chunk* of code that we can then execute at a later time.

Syntax:
```javascript
function name([param[, param[, ... param]]]) {
  [statements];
}
```

__Example__:
```javascript
function add(x, y) {
  return x + y;
}
add(5, 4); // -> 9
```

For the visual learners out there:
<p align="left">
  <img src="/src/assets/function-definition.jpg" width="80%" alt="function-definition">
</p>

#### Function Scope:
In JavaScript there are two types of scope:
* Local scope
* Global scope

With function scope, each function creates a new scope and scope determines the accessibility (visibility) of these variables. Variables defined inside a function are not accessible (visible) from outside the function.

#### Local Variables:
Variables declared within a JavaScript function, become __local__ to the function.

Local variables have __Function scope__: They can only be accessed from within the function.

Example:
```javascript
// code here can NOT use carName

function myFunc() {
  let carName = 'Toyota';

  // code here CAN use carName
}
```

Since __local__ variables are only recognized inside their functions, variables with the same name can be used in different functions.

__Local__ variables are created when a function starts, and deleted when the function is completed.

#### Global Variables:
A variable declared outside a function, becomes __global__.

A global variable has __global scope__: All scripts and functions on a web page can access it.

Example:
```javascript
let carName = 'Toyota';

// code here CAN use carName

function myFunc() {

  // code here CAN also use carName

}
```

#### Function Expressions:
In JavaScript functions are objects which means we can store them in variables, arrays, and we can pass them around as arguments.

Example 1: Storing a function in a `variable`
```javascript
// old
function square(num) {
  return num + num;
}
square(7); // -> 49

// new
const square = function(num) {
  return num + num;
};
square(7); // -> 49
```

We can store our functions in an `array` like this:
```javascript
const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const multiply = function(x, y) {
  return x * y;
};

const divide = function(x, y) {
  return x / y;
};

// next we add our functions to an array
const operations = [ add, subtract, multiply, divide ];

// we can call our functions from the variable "operations"
operations[1](100, 4); // -> 96 (subtract)
operations[2](100, 4); // -> 400 (multiply)
// or from the function itself
subtract(100 - 4); // -> 96
multiply(100 - 4); // -> 400
```

We can then loop over our `array` of functions like this:
```javascript
for (let func of operations) {
  let result = func(30, 5);
  console.log(result);
}
// -> 35 (add)
// -> 25 (subtract)
// -> 150 (multiply)
// -> 6 (divide)
```

To store functions in an `object` we do this:
```javascript
const operationsObject = {
  add      : add,
  subtract : subtract,
  multiply : multiply,
  divide   : divide
};
operationsObject.add(50, 2); // -> 52
operationsObject.subtract(50, 2); // -> 48
```

#### Parameters vs. Arguments:
A __parameter__ is the variable name, defined in the function signature, of the value which will be given as an __argument__. 

It's important to distinguish them, as a __parameter__ can represent many different values or even types of values, while an __argument__ will only be that specific value at the time of evaluation.

In this *square* function, *number* is the __parameter__ and *6* is the __argument__ being passed into the function:

```javascript
function square(number) {
  return number * number;
}
square(6); // -> 36
```

#### Higher-Order Functions:
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

#### Arrow Functions:
Arrow functions allow us to write shorter function syntax:

Example:
```javascript
// old
square = function(x) {
  return x + x;
};

// new
const square = (x) => {
  return x + x;
};
```

We can shorten this even more if the function has *only* one statement, and the statement returns a value, we can remove the brackets *and* the `return` keyword:

```javascript
square = (x) => x + x; 
```

> When dealing with arrow functions it's important to remember that the keyword `this` behaves differently than it does in traditional functions. *See the "this" section for more details*.

**[⬆ Top](#table-of-contents)**

----

### Destructuring

#### Object Destructuring:
Destructuring saves you from creating temporary references for those properties, and from repetitive access of the object. Repeating object access creates more repetitive code, requires more reading, and creates more opportunities for mistakes. 

Destructuring objects also provides a single site of definition of the object structure that is used in the block, rather than requiring reading the entire block to determine what is used.

```javascript
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
};

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
};

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
};
```

#### Array Destructuring:
```javascript
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

#### Destructuring multiple return values:
We use object destructuring for multiple return values, not array destructuring.

Why? You can add new properties over time or change the order of things without breaking call sites.

```javascript
// bad
function processInput(input) {
  
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

**[⬆ Top](#table-of-contents)**

----

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

// Flatten separate arrays
const e = [[1, 2], [3, 4]];
const f = [...e[0], ...e[1]]; 
console.log(f); // -> [1, 2, 3, 4]

// Convert iterable to array
const g = [...'hello']; 
console.log(g); // -> g = ['h', 'e', 'l', 'l', 'o']
```

**[⬆ Top](#table-of-contents)**

----

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

**[⬆ Top](#table-of-contents)**

----

### This
`this` is a fundamental part of JavaScript that helps us write much more useful `methods` in our `objects`.

We can think of `this` as a reference to the current *execution scope*. It is going to give you an `object` back.

So depending on the scope and depending on the rules of how `this` works that `object` changes. It could even be a reference to the *global scope*.

Syntax:
```javascript
this
```

Example:
```javascript
// In web browsers, the window object is also the global object:
console.log(this === window); // -> true

a = 37;
console.log(window.a); // -> 37

this.b = 'katie';
console.log(window.b) // -> "katie"
console.log(b) // -> "katie"
```

#### This in Methods:
We have the ability to write an `object` or a `method` that is aware of the `object` it lives in.

This means we can use `objects` not only to store different `methods` because they're related (add, multiply, divide, etc.) we group them together as a nice way to create a container for our `methods` that are similar.

But now we have a way of also interacting with properties with other `values` or even other `methods`. This means our object can be a little self-contained world where we can have variables.

Example 1:
```javascript
const user = {
  first    : 'Katie',
  last     : 'Jane',
  nickName : '2 Sweet',
  fullName() {
    console.log(`${this.first} ${this.last} aka ${this.nickName}`);
  }
};
user.fullName(); // -> Katie Jane aka 2 Sweet
```

In the example above, since we're writing `this` a lot we can destructure it down to:
```javascript
const user = {
  first    : 'Katie',
  last     : 'Jane',
  nickName : '2 Sweet',
  fullName() {

    // destructuring "this"
    const { first, last, nickName } = this;
    // we can then remove the "this" and simply call the keys
    console.log(`${first} ${last} aka ${nickName}`);
  }
};
user.fullName(); // -> Katie Jane aka 2 Sweet
```

Example 2: Adding multiple methods to an object
```javascript
const user = {
  first    : 'Katie',
  last     : 'Jane',
  nickName : '2 Sweet',
  fullName() {
    const { first, last, nickName } = this;

    console.log(`${first} ${last} aka ${nickName}`);
  },
  // here we add a second method
  printBio() {
    // we need to use "this" to reference the whole object,    only using fullName() throws a reference error
    const fullName = this.fullName();
    console.log(`${fullName} is awesome!`);
  }
};

const printBio = user.printBio();
console.log(printBio); // -> Katie Jane aka 2 Sweet is awesome!
```
In the example above, we call a method `this.fullName()` that is located within the same object using `this`. In that method we access 3 different properties `[first, last, nickName]` using `this` using destructuring. 

The value of `this` in both methods is referring to the object they live in (user).


#### This and Arrow Functions:
In short, the value of `this` does not change in arrow functions.

In regular functions the `this` keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions the `this` keyword *always* represents the object that defined the arrow function.

This is generally why we do not use arrow functions as methods because a lot of the methods we write, we want to have access to the parent object of the containing object to do things like:
  * referencing properties
  * calling a different method like we did in `printBio()` (`this.fullName()`).

Example:
```javascript
const person = {
  first    : 'Katie',
  last     : 'Jane',
  nickName : '2 Sweet',
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} aka ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
  sayHello    : () => {
    console.log(this);
    console.log(`${this.nickName} says hi there!`);
  }
};
console.log(person.sayHello());
// -> Window
// -> undefined says hi there!!
```

**[⬆ Top](#table-of-contents)**

----

### The Document Object Model (DOM)

The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML and XML documents.

The DOM is the JavaScript representation of the content on a page and it consists of a bunch of objects that we can interact with via JavaScript.

In this HTML code:
```html
<html>
  <body>
    <h1>Hello!</h1>
    <ul>
      <l1>Water Plants</li>
      <l1>Do Laundry</li>
    </ul>
  </body>
</html>
```

JavaScript reads it as, a `document` object, a `body` object, an `h1` object, a `ul` object, and two `li` objects.

These JavaScript objects have a variety of properties and methods associated with them. An example of this might be, what their content is or what text is inside the object (property). Or maybe we want to delete one of the objects or update it (method).

#### DOM Properties and Methods:
HTML DOM __methods__ are *actions* you can perform on HTML Elements (like adding or deleting an HTML element).

HTML DOM __properties__ are *values* of HTML Elements that you can set or change (like changing the content of an HTML element).

In the following example, the `<script>` changes the content (the `innerHTML`) of the `<p>` element with `id = "demo"`.

__Example__:
```html
<!-- HTML -->
<body>
  <p id="practice"></p>
</body>
```
```javascript
// JavaScript
document.getElementById("practice").innerHTML = "Hello World!";
```
In the example above, `getElementById` is a __method__, while `innerHTML` is a __property__.

#### DOM Manipulation:
When working with JS in the browser, instead of writing `document.querySelector()`/`document.querySelectorAll()` multiple times, you could do the following thing:

```javascript
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Usage
const demo = $('#demo');

// Select all the `a` tags
[...$$("a[href *='#']")].forEach(console.log);
```

### DOM Methods and Properties

#### DOM Selecting Methods:
#### document.getElementById()
`getElementById()` returns an *Element* object representing the element whose `id` property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

__Syntax__:
```javascript
let element = document.getElementById(id);
```

__Example__:
```html
<!-- HTML -->
<body>
  <p id="para">Some text here</p>
  <button onclick="changeColor('blue');">Blue</button>
  <button onclick="changeColor('red');">Red</button>
</body>
```
```javascript
// JavaScript
function changeColor(newColor) {
  let elem = document.getElementById('para');
  elem.style.color = newColor;
}
```
Result: \
When the `Blue` button is clicked, `Some text here` text changes color to blue and vice-versa with the `Red` button.

#### document.getElementsByTagName()
`getElementsByTagName()` method of *Document* interface returns an *HTMLCollection* of elements with the given tag name (`< >`). The complete document is searched, including the root node.

__Syntax__:
```javascript
let elements = document.getElementsByTagName(name);
```

__Example__:
```html
<!-- HTML -->
<body>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
  <button onclick="countPTags()">Count paragraphs</button>
</body>
```
```javascript
// JavaScript
function countPTags() {
  let totalPTags = document.getElementsByTagName('p');
  console.log(`Total p tags are: ${totalPTags.length}`);
}
// -> Total p tags are: 3
```
Result: \
When the `Count paragraphs` button is clicked, the console logs the amount of `<p>` tags it finds in the document (3).

The `HTMLCollection` is an array-like object that is not an array. It is a collection of objects that we can access using indeces.

> Regular array methods like `pop()` or `includes()` don't work with `HTMLCollection`.

__Example__:
```html
<!-- HTML -->
<body>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</body>
```
```javascript
const pTags = document.getElementsByTagName('p');

console.log(pTags); // -> HTMLCollection { 0: p, 1: p, 2: p }
console.log(pTags.length); // -> 3
console.log(pTags[0]); // -> <p> (Paragraph 1)
console.log(pTags[2]); // -> <p> (Paragraph 3)
```

From the example above, we can iterate over `HTMLCollection`'s:
```javascript
for (let p of pTags) {
  console.log(p);
}
// -> <p> (Paragraph 1)
// -> <p> (Paragraph 2)
// -> <p> (Paragraph 3)
```

Since it is an iterable we can also use __spread__ (`...`) to turn it into an array and spread it:
```javascript
const arr = [...pTags];

console.log(arr);
// -> 0: <p>
// -> 1: <p>
// -> 2: <p>
```
We have now turned it into an array!

#### document.getElementsByClassName()
`getElementsByClassName()` method of `Document` interface returns an array-like object of all child elements which have all of the given class name(s). When called on the `document` object, the complete document is searched, including the root node.

__Syntax__:
```javascript
let elements = document.getElementsByClassName(names); 
// or
let elements = rootElement.getElementsByClassName(names);
```

__Example__:
```html
<!-- HTML -->
<body>
  <div id="parent-id">
    <p>hello world 1</p>
    <p class="test">hello world 2</p>
    <p>hello world 3</p>
    <p>hello world 4</p>
  </div>
</body>
```
```javascript
// JavaScript
// a list of matching elements, *not* the element itself
const test = document.getElementsByClassName('.test');
console.log(test);
// -> HTMLCollection { 0: p.test, length: 1 }

// the first element, as we wanted
const testTarget = document.getElementsByClassName('.test')[0];
console.log(testTarget);
// -> <p class="test">
```

A commonly used method of operation is combining or chaining `document.getElementById()` and `document.getElementByClassName()`.

From the example above:
```html
<!-- HTML -->
<body>
  <div id="parent-id">
    <p>hello world 1</p>
    <p class="test">hello world 2</p>
    <p>hello world 3</p>
    <p>hello world 4</p>
  </div>
</body>
```
```javascript
// JavaScript
const parentDOM = document.getElementById("#parent-id");
console.log(parentDOM); // -> <div id="parent-id">

// a list of matching elements, *not* the element itself
const test = parentDOM.getElementsByClassName('.test');
console.log(test); // -> HTMLCollection { 0: p.test, length: 1 }

// the first element, as we wanted
const testTarget = parentDOM.getElementsByClassName('.test')[0];
console.log(testTarget); // -> <p class="test">
```

#### document.querySelector()
This returns the first `Element` within the document that matches the specified selector, or group of selectors. If no matches are found, `null` is returned.

It is an all-in-one method to select a single element from the DOM. It can select everything that we use to select elements (ID, class, tag, etc.). This will only pass us the very first match regardless of how many there are in the document.

__Syntax__:
```javascript
element = document.querySelector(selectors);
```
__Examples__:

This will find the first `<h1>` element tag:
```javascript
document.querySelector('h1');
```
This will find the first element with `ID` of `red`:
```javascript
document.querySelector('#red');
```
This will find the first element with `class` of `.big`:
```javascript
document.querySelector('.big');
```

> Note: `querySelector()` is less performant than the traditional `getElementById` or `getElementsByClassName/TagName`. Depending on what we pass into it, it could have to do a lot of work.

#### document.querySelectorAll()
This returns a static (not live) `NodeList` representing a list of the document's elements that match the specified group of selectors.

This acts the same as `document.querySelector()`, but returns a collection of matching elements.

__Syntax__:
```javascript
elementList = parentNode.querySelectorAll(selectors);
```

__Example__:
```html
<!-- HTML -->
<body>
  <div id="parent-id">
    <p>hello world 1</p>
    <p class="test">hello world 2</p>
    <p>hello world 3</p>
    <p>hello world 4</p>
  </div>
</body>
```
```javascript
// JavaScript
// targeting the ID, "parent-id":
const parentDOM = document.querySelector('#parent-id');
console.log(parentDOM); // -> <div id="parent-id">

// targeting the class, "test":
const test = parentDOM.querySelector('.test');
console.log(test); // -> <p class="test">

// targeting all the p tags:
const pTags = parentDOM.querySelectorAll('p');
console.log(pTags); // -> NodeList(4) [ p, p.test, p, p ]

// targeting more specifically:
const pTarget = document.querySelector('p.test');
console.log(pTarget); // -> <p class="test">hello world 2</p>
```

#### DOM Manipulating or "Accessing" Properties and Methods:

#### HTMLElement.innerText
The innerText property of the HTMLElement interface represents the "rendered" text content, or the "visible" text of a node and its descendants. 
 * used for Accessing text from an element (how we get the contents of an element)
 * innerText only shows “human-readable” elements.
 * We CANNOT create new elements with innerText.

__Syntax__:
```javascript
const renderedText = htmlElement.innerText
htmlElement.innerText = string
```

__Example__:
```html
<!-- HTML -->
<body>
  <div id="parent-id">
    <p>hello world 1</p>
    <p class="test">hello world 2</p>
    <p>hello world 3</p>
    <p>hello world 4</p>
  </div>
</body>
```
```javascript
// JavaScript
const insideElement = document.querySelector('p.test');
console.log(insideElement.innerText); // -> 'hello world 2'
```

#### Node.textContent
This property sets or returns the text content of the specified node, and __all__ its descendants.
 * textContent gets the content of all elements, including `<script> `and `<style>` elements.
 * textContent will return the text of elements that are hidden with CSS.
 * textContent will print out all text formatting (indenting), hidden code, tags, etc.

__Syntax__:
```javascript
let text = someNode.textContent
someOtherNode.textContent = string
```

#### innerText vs. textContent:
`innerText` is defined only for HTMLElement objects, while `textContent` is defined for all Node objects.

__Example__:
```html
<!-- HTML -->
<p>
  Hello <span style="display: none;">World</span>
</p>
```
```javascript
// JavaScript
const element = document.querySelector('p');

console.log(element.innerText); // -> Hello
console.log(element.textContent); // -> Hello World
```

#### Element.innerHTML:
This property sets or returns the HTML content (inner HTML) of an element.

`innerHTML` will return all of the text inside of an element as well as all other tags inside a given element. When updating the HTML, like adding an element we __HAVE__ to use innerHTML. We __CANNOT__ use innerText for this.

__Syntax__:
```javascript
const content = element.innerHTML;
element.innerHTML = htmlString;
```

__Example__:
```html
<!-- HTML -->
<body>
  <ul>
    <li>First thing</li>
    <li>Second thing</li>
    <li>Third thing</li>
  </ul>
</body>
```
```javascript
// JavaScript
const elements = document.querySelector('ul');

// using "innerHTML"
console.log(elements.innerHTML);
// -> <li>First thing</li>
// -> <li>Second thing</li>
// -> <li>Third thing</li>

// using "innerText"
console.log(elements.innerText);
// -> "First thing
// -> Second thing
// -> Third thing"
```

#### DOM Accessing Properties on Individual Elements:
These are all referred to as "attributes" which in JavaScript is a word followed by an equal sign (`=`) and quotes (`src=" "`).

#### .value
All the elements which allow a user to type something in or select something, have a `value` property with JavaScript.

> If the elements have just plain text, you can use `textContent` and `innerHTML` to get the plain text value

__Example__:
```html
<!-- HTML -->
<body>
  <form>
    <input type="text" placeholder="Name" value="Katie" />
    <input type="password" placeholder="Password" />
    <input type="checkbox" />
    <input type="range" min="0" max="100" step="10" />
    <input type="submit" value="Submit" />
  </form>
</body>
```
```javascript
// JavaScript
const inputs = document.querySelectorAll('input');

// for text boxes:
const nameValue = inputs[0].value;
// if user typed "Katie" in the first input box ("Name)
console.log(nameValue); // -> "Katie"

// for checkboxes:
const inputChecked = inputs[2].checked;
// if user toggles the checkbox "on"
console.log(inputChecked); // -> true

// for range slider:
const rangeSlider = inputs[3].value;
// if user slides the knob halfway.
console.log(rangeSlider); // -> "50" [incrementing by 10 (step)]
```

#### Element.getAttribute()
This method of the `Element` interface returns the value of a specified attribute on the element. If the given attribute does not exist, the value returned will either be `null` or `" "` (the empty string).

__Syntax__:
```javascript
let attribute = element.getAttribute(attributeName);
```

__Example__:
```html
<!-- HTML -->
<body>
  <form>
    <input type="text" placeholder="Name" />
    <input type="range" min="0" max="100" step="10" />
    <input type="submit" value="Submit" />
  </form>
</body>
```
```javascript
// JavaScript
const range = document.querySelector('input[type="range"]');

const maxRange = range.getAttribute('max');
console.log(maxRange); // -> "100"

const minRange = range.getAttribute('min');
console.log(minRange); // -> 0
```

#### Element.setAttribute()
Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

To get the current value of an attribute, use `getAttribute()`; to remove an attribute, call `removeAttribute()`.

__Syntax__:
```javascript
Element.setAttribute(name, value);
```

__Example__:
```html
<!-- HTML -->
<body>
  <form>
    <input type="text" placeholder="Name" />
    <input type="range" min="0" max="100" step="10" />
    <input type="submit" value="Submit" />
  </form>
</body>
```
```javascript
// JavaScript
const range = document.querySelector('input[type="range"]');

range.setAttribute('max', '120');
range.setAttribute('min', '-10');
```

#### DOM Accessing the Parent, Children or Nearest Sibling:

#### Node.parentElement
This returns the parent element of the specified element.

__Syntax__:
```javascript
parentElement = node.parentElement
```

__Example__:
```html
<!-- HTML -->
<body>
  <section>
    <h2>Section Title</h2>
    <p>First paragraph</p>
    <p>Second paragraph</p>
  </section>
</body>
```
```javascript
// JavaScript
const firstP = document.querySelector('p');

console.log(firstP.parentElement); // -> <section>

// we can also chain the .parentElement
console.log(firstP.parentElement.parentElement); // -> <body>
```

#### ParentNode.children
This returns a live `HTMLCollection` which contains all of the child elements of the node upon which it was called.

__Syntax__:
```javascript
let children = node.children;
```

__Example__:
```html
<!-- HTML -->
<body>
  <section>
    <h2>Section Title</h2>
    <p>First paragraph</p>
    <p>Second paragraph</p>
  </section>
</body>
```
```javascript
// JavaScript
const sectionChild = document.querySelector('section');

console.log(sectionChild.children); // -> HTMLCollection { 0: h2, 1: p, 2: p }
console.log(sectionChild.children[0]); // -> <h2>
```

#### Element.nextElementSibling
This returns the element immediately following the specified one in its parent's children list, or `null` if the specified element is the last one in the list.

__Syntax__:
```javascript
// Getter
element = el.nextElementSibling;

// No setter; read-only property
```

__Example__:
```html
<!-- HTML -->
<body>
  <section>
    <h2>Section Title</h2>
    <p>First paragraph</p>
    <p>Second paragraph</p>
  </section>
</body>
```
```javascript
// JavaScript
const nextSib = document.querySelector('h2');

console.log(nextSib.nextElementSibling); // -> <p>First paragraph</p>
```

#### Element.previousElementSibling
This returns the `Element` immediately prior to the specified one in its parent's children list, or `null` if the specified element is the first one in the list.

__Syntax__:
```javascript
// Getter
element = el.previousElementSibling;

// No setter; read-only property
```

__Example__:
```html
<!-- HTML -->
<body>
  <section>
    <h2>Section Title</h2>
    <p>First paragraph</p>
    <p>Second paragraph</p>
  </section>
</body>
```
```javascript
// JavaScript
const previousSib = document.querySelector('p');

console.log(previousSib.previousElementSibling); // -> <h2>Section Title</h2>
```

### DOM Manipulating or "Changing" Multiple Elements:
We use `querySelectorAll()`, `getElementsByClassName()`, `getElementsByTagName()` to select all of the element and get an array-like object. We then iterate over that object and call a method or property that we want.

__Example__: Change the text inside all of the "p" elements
```html
<!-- HTML -->
<body>
  <section>
    <h2>Section Title</h2>
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <p>Third paragraph</p>
  </section>
</body>
```
```javascript
// JavaScript
// we select all the p tags
const allPTags = document.querySelectorAll('p');

// next we loop over all p tags
for (let p of allPTags) {
  //  last, we change the text of the p tags
  p.innerText = 'This is new text';
}
console.log(allPTags[0].innerText); // -> 'This is new text'
console.log(allPTags[1].innerText); // -> 'This is new text'
```

### DOM Changing Styles:

__Example__: Change the text color inside all "p" elements
```html
<!-- HTML -->
<body>
  <section>
    <h2>Section Title</h2>
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <p>Third paragraph</p>
  </section>
</body>
```
```javascript
// JavaScript
// we select all the p tags
const allPTags = document.querySelectorAll('p');

// we create a colors array
const colors = [ 'red', 'green', 'blue' ];

// next we loop over all p tags and print the text and index
allPTags.forEach((p, idx) => {
  // assign a variable to all the colors in the array
  const newColors = colors[idx];
  // change the text color of the iterated p tags
  p.style.color = newColors;
});
```

#### Window.getComputedStyle()
This method returns an object containing the values of all CSS properties of an element (color, backgroundColor, display, width, etc.), after applying active stylesheets and resolving any basic computation those values may contain. 

Individual CSS property values are accessed through APIs provided by the object, or by indexing with CSS property names.

__Syntax__:
```javascript
window.getComputedStyle(element);
window.getComputedStyle(element, pseudoElt);
```

```javascript
document.querySelector('p').style.color;
// -> "" (returns empty)
```
This returns empty because the style property only contains the inline styles. It does not contain any "calculated" styles, styles from a style sheet (CSS) or styles from a given class.

If we want to get the computed value for an element we have to call the method "getComputedStyle":
```javascript
const p = document.querySelector('p');

const styles = getComputedStyle(p);

// we can now access the style properties of all the "p" elements
console.log(styles.backgroundColor); // -> "rgba(0, 0, 0, 0)"
console.log(styles.fontFamily); // -> "serif"
```

#### Element.classList
This property returns a live `DOMTokenList` collection of the class attributes of the element. This can then be used to manipulate the class list.

This property is useful to add, remove and toggle CSS classes on an element. The classList property is read-only, however, you can modify it by using the add() and remove() methods.

__Syntax__:
```javascript
const elementClasses = elementNodeReference.classList;
```

__Examples__:

Add an element to the DOM:
```html
<body>
  <div id="el"></div>
</body>
```
We then get a reference to the DOM element:
```javascript
const el = document.querySelector("#el");
```
We can now manipulate the classes on that element with the `classList` method:
```javascript
// Add a class
el.classList.add('open');

// Add many classes
el.classList.add('this', 'little', 'piggy');
let classes = [ 'is-message', 'is-warning' ];
el.classList.add(...classes);

// Remove a class
el.classList.remove('open');

// Remove multiple classes
el.classList.remove('this', 'little', 'piggy');

// Loop over each class
el.classList; // DOMTokenList (pretty much an array)
el.classList.forEach(className => {
  // don't use "class" as that's a reserved word
  console.log(className);
});

el.classList.length; // integer of how many classes there are

// Replace a class (replaces first with second)
el.classList.replace('is-big', 'is-small');

// Toggle a class (if it's there, remove it, if it's not there, add it)
el.classList.toggle('open');
// Remove the class
el.classList.toggle('open', false);
// Add the class
el.classList.toggle('open', true);
// Add the class with logic
el.classList.toggle('raining', weather === 'raining');

// Check if element has class (returns true or false)
el.classList.contains('open');

// Look at individual classes <div class="hot dog">
el.classList.item(0); // -> hot
el.classList.item(1); // -> dog
el.classList.item(2); // -> null
el.classList[1]; // -> dog
```

### DOM Creating Elements
How we insert or add elements into the DOM.

#### Document.createElement()
This method creates the HTML element specified by `tagName`, or an `HTMLUnknownElement` if `tagName` isn't recognized.

__Syntax__:
```javascript
let element = document.createElement(tagName[, options]);
```

__Example__: Creating an Element
```javascript
// Step 1: Create our element
const newH2 = document.createElement('h2');
console.log(newH2); // -> <h2> </h2>

// Step 2: Add text to our new "h2" element
newH2.innerText = "I like superhero's!";

// Step 3: Add the class "special" to our "h2" element
newH2.classList.add('special');

// Step 4: Add our element to the DOM
// we select where we want to add the new element
const addedBodyElement = document.querySelector('body');
// we append the element to the end of the body section
addedBodyElement.appendChild(newH2);
```

__Example__: Creating an Image
```javascript
// create the image:
const newImg = document.createElement('img');

// link the image:
newImg.src ='https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';

// resize the image:
newImg.style.width = '500px';

// append the image to the DOM:
document.body.appendChild(newImg);
```

__Example__: Creating a Link
```javascript
// create the link:
const newLink = document.createElement('a');

// add the link text:
newLink.innerText = 'Click here for more info';
// add the link source:
newLink.href = 'https://www.josephskycrest.com/';

// append the link to the DOM:
const ulEnd = document.querySelector('ul');
ulEnd.appendChild(newLink);
```

### DOM Inserting Elements with an Order

#### Element.insertAdjacentElement()
This method of the `Element` interface inserts a given element node at a given position relative to the element it is invoked upon.

__Syntax__:
```javascript
targetElement.insertAdjacentElement(position, element);
```

__Position__:

A `DOMString` representing the position relative to the `targetElement`; must match (case-insensitively) one of the following strings:
  * `beforebegin`: Before the targetElement itself.
  * `afterbegin`: Just inside the targetElement, before its first child.
  * `beforeend`: Just inside the targetElement, after its last child.
  * `afterend`: After the targetElement itself.


__Visualization__:
```html
  beforebegin
  <p>
    afterbegin
    foo (existing element)
    beforeend
  </p>
  afterend
```

__Example__:
```javascript
// JavaScript
// create the new "i" tag:
const iTag = document.createElement('i');
iTag.innerText = 'I am italics!';

// select the element where we want to insert our new "i" tag:
const firstP = document.querySelector('p');

// insert where and what we want to insert into the DOM:
firstP.insertAdjacentElement('beforebegin', iTag);
```

### DOM Removing Elements

#### Node.removeChild()
This method removes a child node from the DOM and returns the removed node.

__Syntax__:
```javascript
let oldChild = node.removeChild(child);
// or just
node.removeChild(child);
```
The removed child node still exists in memory, but is no longer part of the DOM. With the first syntax form shown, you may reuse the removed node later in your code, via the `oldChild` object reference.

__Example__:
```javascript
// select the parent:
const ul = document.querySelector('ul');

// select the child to be removed:
const removeEle = ul.querySelector('.special');

// the pattern goes: the parent, then remove child, then the child
ul.removeChild(removeEle);

// when we remove a child it returns the removed child which allows us to save it to a variable incase we want to do something with it:
const deleted = ul.removeChild(removeEle);
```

#### ChildNode.remove()
This method removes the object from the tree it belongs to. The `remove` method does not need the parent node.

__Syntax__:
```javascript
node.remove();
```

All we have to do is select the target (what we want to remove) and then call remove on that node (the actual item we want to remove):
```javascript
const h2 = document.querySelector('h2');
h2.remove();
```

#### Helpful Resources:
[Traversing the DOM](https://zellwk.com/blog/dom-traversals/)

**[⬆ Top](#table-of-contents)**

----

### Contributing
Contributions are always welcome! All I ask is that you open an issue and we discuss your proposed changes before you create a pull request.